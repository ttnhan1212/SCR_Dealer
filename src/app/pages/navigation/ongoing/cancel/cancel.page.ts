import { AngularFireAuth } from '@angular/fire/auth';
import { NotiService } from './../../../../services/noti.service';
import { ActivatedRoute, Router } from '@angular/router';
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
		private router: Router,
		private route: ActivatedRoute,
		private afAuth: AngularFireAuth,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.afAuth.currentUser.then((user) => {
			if (user) {
				this.userId = user.uid;
			}
		});
	}

	async submitCancel() {
		await this.dealService.updateDeal(this.id, {
			status: 4,
			updateDate: this.date,
		});
		await this.dealService.createCancelDeal({
			result: 'Cancel',
			reason: this.message,
			cancelDate: this.date,
			dealerId: this.userId,
			requestId: this.id,
		});
		await this.notiService.createNoti({
			requestId: this.id,
			status: 4,
			updateDate: this.userId,
		});
		await this.dealService
			.getParticipantById(this.id, this.userId)
			.subscribe((val) => {
				val.forEach((part) => {
					this.dealService.deleteParticipant(this.id, part.payload.doc.id);
				});
			});
		await this.dealService.updateDealInDealer(this.id, { status: 'Cancel' });
		await this.dealService.updateDeal(this.id, {
			participants: { created: false },
		});
		this.router.navigate(['/', 'home', 'deal']);
	}
}
