import { LocationService } from './../../../services/location.service';
import { DealsService } from './../../../services/deals.service';
import { ModelService } from './../../../services/model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-deal',
	templateUrl: './deal.page.html',
	styleUrls: ['./deal.page.scss'],
})
export class DealPage implements OnInit, OnDestroy {
	models = [];
	modelSub: Subscription;

	deals = [];
	dealSub: Subscription;

	locations = [];
	locationSub: Subscription;

	constructor(
		private modelService: ModelService,
		private dealService: DealsService,
		private locationService: LocationService,
	) {}

	ngOnInit() {
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
			},
		);

		this.locationSub = this.locationService.getLocation().subscribe((data) => {
			this.locations = data.map((val) => {
				return {
					city: val.payload.doc.data()['city'],
				};
			});
		});

		this.dealSub = this.dealService.getDeal().subscribe((data: any) => {
			this.deals = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data(),
				};
			});
		});
	}
	ngOnDestroy() {
		if (this.modelSub) {
			this.modelSub.unsubscribe();
		}
	}
}
