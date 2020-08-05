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
	authState: any = null;

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
		await this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
			if (this.authState) {
				this.userId = this.authState.uid;
			}
		});
	}

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
		this.router.navigate(['/', 'home', 'deal']);
	}
}
