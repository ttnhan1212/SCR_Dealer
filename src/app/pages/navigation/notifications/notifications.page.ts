import { TranslateService } from '@ngx-translate/core';
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

	sellerId: string;
	constructor(
		public notiService: NotiService,
		public dealsService: DealsService,
		private afAuth: AngularFireAuth,
		translate: TranslateService,
	) {
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.afAuth.currentUser.then((user) => {
			if (user) {
				this.sellerId = user.uid;
			}
			this.getNoti(this.sellerId);
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

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}
