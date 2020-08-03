import { NotiService } from './../../../../services/noti.service';
import { ActivatedRoute } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cancel',
	templateUrl: './cancel.page.html',
	styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {
	id: string;
	message: string;

	userId: string;

	date = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		private dealService: DealsService,
		private notiService: NotiService,
		private route: ActivatedRoute,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		if (localStorage.getItem('user')) {
			this.userId = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	ngOnInit() {}

	async submitCancel() {
		await this.dealService.updateDeal(this.id, {
			cancelMessage: this.message,
			status: 'Canceled',
			updateDate: this.date,
			user: this.userId,
		});
		await this.notiService.createNoti({
			requestId: this.id,
			status: 'Canceled',
			updateDate: this.userId,
		});
		await this.dealService.getParticipant(this.id).subscribe((val) => {
			val.forEach((part) => {
				this.dealService.deleteParticipant(this.id, part.payload.doc.id);
			});
		});
		await this.dealService.updateDeal(this.id, {
			participants: { created: false },
		});
	}
}
