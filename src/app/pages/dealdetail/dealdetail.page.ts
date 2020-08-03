import { AngularFireAuth } from '@angular/fire/auth';
import { NotiService } from './../../services/noti.service';
import { DealDetail } from './../../models/deal-detail';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';

@Component({
	selector: 'app-dealdetail',
	templateUrl: './dealdetail.page.html',
	styleUrls: ['./dealdetail.page.scss'],
})
export class DealdetailPage implements OnInit, OnDestroy {
	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	id: string;
	authState: any = null;

	dealer: {};
	price: number;
	userId: string;
	bidTime = Math.floor(new Date().getTime() / 1000.0);
	participant: boolean;

	dealSub: Subscription;

	detail = {} as DealDetail;

	constructor(
		private dealsService: DealsService,
		private router: Router,
		private route: ActivatedRoute,
		private notiService: NotiService,
		private afAuth: AngularFireAuth,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		// if (localStorage.getItem('user')) {
		// 	this.userId = JSON.parse(localStorage.getItem('user')).uid;
		// }
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
			if (this.authState) {
				this.userId = this.authState.uid;
				this.getDealDetail(this.id);
				this.getDealerInParticipant(this.id, this.userId);
			}
		});
	}

	getDealDetail(id: string) {
		this.dealSub = this.dealsService.getDealDetail(id).subscribe((val: any) => {
			this.detail = {
				...val.payload.data(),
			};
		});
	}

	getDealerInParticipant(id: string, userId: string) {
		this.dealsService.getDealerInParticipant(id, userId).subscribe((val) => {
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
			userId: this.userId,
			bidTime: this.bidTime,
			selected: false,
		};
		await this.dealsService.dealerToDeal(this.id, this.dealer);
		await this.dealsService.addDealToDealer(this.userId, {
			dealId: this.id,
			price: this.price,
			bidTime: this.bidTime,
		});
		await this.dealsService.updateDeal(this.id, { status: 'bidding' });
		await this.notiService.createNoti({
			requestId: this.id,
			status: 'Bidding',
			updateDate: Math.floor(new Date().getTime() / 1000.0),
			user: this.userId,
		});
		this.router.navigate(['/', 'home', 'ongoing']);
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
