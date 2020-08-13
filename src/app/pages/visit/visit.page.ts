import { DealDetail } from './../../models/deal-detail';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotiService } from './../../services/noti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DealsService } from './../../services/deals.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-visit',
	templateUrl: './visit.page.html',
	styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	id: string;
	now: string = new Date().toISOString();
	selectDate: Date;

	dealer: {};
	price: number;
	userId: any;
	bidTime = Math.floor(new Date().getTime() / 1000.0);
	participant: boolean;

	dealSub: Subscription;

	detail = {} as DealDetail;

	constructor(
		private dealsService: DealsService,
		private router: Router,
		private route: ActivatedRoute,
		private notiService: NotiService,
		private afAuth: AngularFireAuth
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.afAuth.authState.subscribe((val) => {
			if (val) {
				this.userId = val;
			}
		});
	}

	ngOnInit() {
		this.getDealDetail(this.id);
		this.getDealerInParticipant(this.id);
	}

	getDealDetail(id: string) {
		this.dealSub = this.dealsService.getDealDetail(id).subscribe((val: any) => {
			this.detail = {
				...val.payload.data(),
			};
		});
	}

	getDealerInParticipant(id: string) {
		this.dealsService.getDealerInParticipant(id).subscribe((val) => {
			if (val.length === 0) {
				return (this.participant = !Boolean(val));
			} else {
				return (this.participant = Boolean(val));
			}
		});
	}

	addVisitDate() {
		let time = new Date(this.selectDate);
		let unix = Math.floor(time.getTime() / 1000.0);
		this.dealsService.updateDeal(this.id, { visitDate: unix });
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
