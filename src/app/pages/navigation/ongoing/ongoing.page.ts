import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit, OnDestroy {
	logo: any;

	dealSub: Subscription;

	ongoing: any[];

	confirm: any;
	constructor(
		private dealService: DealsService,
		private afAuth: AngularFireAuth,
		public loadingController: LoadingController,
	) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
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
				this.getOngoingDeal(authState.uid);
				loading.dismiss();
			}
		});
	}

	async getOngoingDeal(id: string) {
		this.dealSub = await this.dealService
			.getOngoingDeal(id)
			.subscribe((val) => {
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
				});
			});
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
