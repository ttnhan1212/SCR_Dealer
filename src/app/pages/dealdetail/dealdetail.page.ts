import { LoaderService } from './../../services/loader.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotiService } from './../../services/noti.service';
import { DealDetail } from './../../models/deal-detail';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';
import { TranslateService } from '@ngx-translate/core';
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
		private afAuth: AngularFireAuth,
		private loader: LoaderService,
		translate: TranslateService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.afAuth.currentUser.then((val) => {
			if (val) {
				this.userId = val.uid;
			}
		});

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.getDealDetail(this.id);
		this.getDealerInParticipant(this.id);
	}

	async getDealDetail(id: string) {
		await this.loader.showLoader();

		this.dealSub = await this.dealsService
			.getDealDetail(id)
			.subscribe((val: any) => {
				this.detail = {
					...val.payload.data(),
				};
				this.loader.hideLoader();
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
			userId: this.userId,
			bidTime: this.bidTime,
			selected: false,
		};
		await this.dealsService.dealerToDeal(this.id, this.dealer);
		await this.dealsService.addDealToDealer(this.id, {
			dealId: this.id,
			price: this.price,
			bidTime: this.bidTime,
			canceled: false,
		});
		await this.dealsService.updateDeal(this.id, { status: 2 });
		await this.notiService.createNoti({
			requestId: this.id,
			status: 2,
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
