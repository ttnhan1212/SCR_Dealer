import { AngularFireAuth } from '@angular/fire/auth';
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

	dealerId: string;
	authState: any = null;

	deals = [];
	dealSub: Subscription;

	locations = [];
	locationSub: Subscription;

	constructor(
		private modelService: ModelService,
		private dealService: DealsService,
		private locationService: LocationService,
		private afAuth: AngularFireAuth,
	) {
		// this.dealerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {
		this.getUser();
		this.getModel();
		this.getLocation();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
			if (this.authState) {
				this.dealerId = this.authState.uid;
				this.getDeal();
			}
		});
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
			},
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

	getDeal() {
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
