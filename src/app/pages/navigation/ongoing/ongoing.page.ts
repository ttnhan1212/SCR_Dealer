import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
	logo: any;
	id: string;

	dealSub: Subscription;

	ongoing: any[];

	selected: any;

	confirm: any;
	constructor(
		private dealService: DealsService,
		private afAuth: AngularFireAuth,
		public loadingController: LoadingController,
		translate: TranslateService
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.currentUser();
	}

	async currentUser() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		await this.afAuth.authState.subscribe((authState) => {
			if (authState) {
				loading.present();
				this.id = authState.uid;
				this.getOngoingDeal(authState.uid);
				loading.dismiss();
			}
		});
	}

	async getOngoingDeal(id: string) {
		await this.dealService.getOngoingDeal(id).subscribe((val) => {
			this.ongoing = val.map((e) => {
				return {
					...e.payload.doc.data(),
				};
			});
			this.ongoing.forEach((val: any) => {
				this.dealService.getDealDetail(val.dealId).subscribe((m) => {
					val.deal = {
						...(m.payload.data() as {}),
					};
				});
				this.dealService.getSelectedParticipant(val.dealId).subscribe((v) => {
					if (v) {
						v.map((b) => {
							val.selectedId = b.payload.doc.data()['userId'];
						});
					}
				});
			});
			console.log(this.id);

			console.log(this.ongoing);
		});
	}

	// ngOnDestroy() {
	// 	if (this.dealSub) {
	// 		this.dealSub.unsubscribe();
	// 	}
	// }
}
