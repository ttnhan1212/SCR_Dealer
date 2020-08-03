import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { NotiService } from './../../../services/noti.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';
import { Notifications } from 'src/app/models/notifications';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.page.html',
	styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
	noti: any[];
	request: Request[];

	notiSub: Subscription;
	authState: any = null;

	sellerId: string;
	constructor(
		public notiService: NotiService,
		public dealsService: DealsService,
		private afAuth: AngularFireAuth,
	) {
		// this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
			if (this.authState) {
				this.sellerId = this.authState.uid;
				this.getNoti(this.sellerId);
			}
		});
	}

	getNoti(id: string) {
		this.notiSub = this.notiService.getNoti(id).subscribe((data) => {
			this.noti = data.map((e) => {
				return {
					...(e.payload.doc.data() as {}),
				};
			});
			this.noti.forEach((val) => {
				this.dealsService.getDealDetail(val.requestId).subscribe((m) => {
					val.request = { ...(m.payload.data() as {}) };
				});
			});
		});
	}

	localeDate(time) {
		let myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}
