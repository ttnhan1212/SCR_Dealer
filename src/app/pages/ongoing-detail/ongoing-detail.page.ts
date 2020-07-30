import { DealDetail } from '../../models/deal-detail';
import { Subscription } from 'rxjs';
import { NotiService } from '../../services/noti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ongoing-detail',
	templateUrl: './ongoing-detail.page.html',
	styleUrls: ['./ongoing-detail.page.scss'],
})
export class OngoingDetailPage implements OnInit {
	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	id: string;

	dealer: {};
	price: number;
	userId: string;
	bidTime = Math.floor(new Date().getTime() / 1000.0);

	userExist: boolean;
	participant: any = {};

	dealSub: Subscription;

	detail: any = {};
	constructor(
		private dealsService: DealsService,
		private router: Router,
		private route: ActivatedRoute,
		private notiService: NotiService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		if (localStorage.getItem('user')) {
			this.userId = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	ngOnInit() {
		this.dealSub = this.dealsService
			.getDealDetail(this.id)
			.subscribe((val: any) => {
				this.detail = {
					...val.payload.data(),
				};
			});
		this.dealsService
			.getDealerInParticipant(this.id, this.userId)
			.subscribe((val) => {
				if (val.length === 0) {
					this.participant = {};
					this.userExist = !Boolean(val);
				} else {
					this.participant = { ...val };
					this.userExist = Boolean(val);
				}
			});
	}

	async confirmSelect(user) {
		await this.dealsService.updateDeal(this.id, {
			participants: [user],
		});
		await this.dealsService.getParticipant(this.id).subscribe((val) => {
			val.forEach((part) => {
				this.dealsService.deleteParticipant(this.id, part.payload.doc.id);
			});
		});
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
