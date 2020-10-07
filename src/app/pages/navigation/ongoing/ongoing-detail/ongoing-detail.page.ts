import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { NotiService } from '../../../../services/noti.service';
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
		private afAuth: AngularFireAuth,
		translate: TranslateService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
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
				this.userId = user.uid;
				this.getDealDetail(this.id);
				this.getSelectDealer(this.id);
			}
		});
	}

	getDealDetail(id: string) {
		this.dealSub = this.dealsService.getDealDetail(id).subscribe((val: any) => {
			this.detail = {
				...val.payload.data(),
			};
			this.dealsService.getPlateNum(this.detail.vehiclesId).subscribe((m) => {
				this.detail.plateNum = m.payload.data()['platenumber'];
			});
		});
	}

	getSelectDealer(id: string) {
		this.dealsService.getSelectedDealer(id).subscribe((val) => {
			if (val.length === 0) {
				this.participant = {};
				this.userExist = !Boolean(val);
			} else {
				this.participant = { ...val };
				this.userExist = Boolean(val);
			}
		});
	}

	async confirmSelect(user: string, price: number) {
		await this.dealsService.updateDeal(this.id, {
			status: 5,
			participants: [user, price],
		});
		await this.notiService.createNoti({
			requestId: this.id,
			status: 5,
			updateDate: Math.floor(new Date().getTime() / 1000.0),
			user: this.userId,
		});
		// await this.dealsService.getParticipant(this.id).subscribe((val) => {
		// 	val.forEach((part) => {
		// 		this.dealsService.deleteParticipant(this.id, part.payload.doc.id);
		// 	});
		// });
		// await this.dealsService.getUnselectParticipant(this.id).subscribe((m) => {
		// 	m.forEach((val) => {
		// 		this.dealsService.deleteParticipant(this.id, val.payload.doc.id);
		// 	});
		// });

		this.router.navigate(['/', 'home', 'visit', this.id]);
	}

	cancel() {
		this.router.navigate(['/', 'home', 'ongoing', 'cancel', this.id]);
	}

	ngOnDestroy() {
		if (this.dealSub) {
			this.dealSub.unsubscribe();
		}
	}
}
