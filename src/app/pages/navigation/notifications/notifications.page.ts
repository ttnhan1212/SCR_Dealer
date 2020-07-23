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
	) {
		this.sellerId = JSON.parse(localStorage.getItem('user')).uid;
	}

	ngOnInit() {
		this.notiSub = this.notiService.getNoti(this.sellerId).subscribe((data) => {
			this.noti = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...(e.payload.doc.data() as Notifications),
				};
			});
		});
	}

	ngOnDestroy() {
		if (this.notiSub) {
			this.notiSub.unsubscribe();
		}
	}
}
