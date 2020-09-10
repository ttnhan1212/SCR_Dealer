import { LoadingController } from '@ionic/angular';
import { LocationService } from './../../../services/location.service';
import { DealsService } from './../../../services/deals.service';
import { ModelService } from './../../../services/model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-deal',
	templateUrl: './deal.page.html',
	styleUrls: ['./deal.page.scss'],
})
export class DealPage implements OnInit, OnDestroy {
	models = [];
	modelSub: Subscription;

	dealerId: string;
	authState: any = null;

	deals = [];
	dealSub: Subscription;

	locations = [];
	locationSub: Subscription;

	now = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		private modelService: ModelService,
		private dealService: DealsService,
		private locationService: LocationService,
		public loadingController: LoadingController,
		translate: TranslateService
	) {
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.getModel();
		this.getLocation();
		this.getDeal();
	}

	getModel() {
		this.modelSub = this.modelService.getModel().subscribe(
			(data: any) => {
				this.models = data.map((e) => {
					return {
						id: e.payload.doc.id,
						...e.payload.doc.data(),
					};
				});
			},
			(error: any) => {
				console.log(error);
			}
		);
	}

	getLocation() {
		this.locationSub = this.locationService.getLocation().subscribe((data) => {
			this.locations = data.map((val) => {
				return {
					city: val.payload.doc.data()['city'],
				};
			});
		});
	}

	async getDeal() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		this.dealSub = await this.dealService.getDeal().subscribe((data: any) => {
			loading.present();
			this.deals = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data(),
				};
			});
			loading.dismiss();
			console.log(this.deals);
			console.log(this.now);
		});
	}

	ngOnDestroy() {
		if (this.modelSub) {
			this.modelSub.unsubscribe();
		}
	}
}
