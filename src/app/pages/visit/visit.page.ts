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

	async addDealerToDeal() {
		this.dealer = {
			price: this.price,
			userId: this.userId.uid,
			bidTime: this.bidTime,
			selected: false,
		};
		await this.dealsService.dealerToDeal(this.id, this.dealer);
		await this.dealsService.addDealToDealer({
			dealId: this.id,
			price: this.price,
			bidTime: this.bidTime,
		});
		await this.dealsService.updateDeal(this.id, { status: 'Bidding' });
		await this.notiService.createNoti({
			requestId: this.id,
			status: 'Bidding',
			updateDate: Math.floor(new Date().getTime() / 1000.0),
			user: this.userId.uid,
		});
		this.router.navigate(['/', 'home', 'ongoing']);
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
