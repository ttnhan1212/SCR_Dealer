import { AngularFireAuth } from '@angular/fire/auth';
import { LoaderService } from './../../../services/loader.service';
import { DealsService } from './../../../services/deals.service';
import { ResultService } from './../../../services/result.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';

@Component({
	selector: 'app-paymentcancel',
	templateUrl: './paymentcancel.page.html',
	styleUrls: ['./paymentcancel.page.scss'],
})
export class PaymentcancelPage implements OnInit {
	id: string;
	userId: string;
	authState: any = null;

	now: string = new Date().toISOString();
	selectDate: Date;

	date = Math.floor(new Date().getTime() / 1000.0);

	files: File[] = [];

	cancelForm: FormGroup;
	reason = new FormControl('', Validators.required);
	other = new FormControl('', Validators.required);

	constructor(
		translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,
		private result: ResultService,
		private dealService: DealsService,
		private loading: LoaderService,
		private afAuth: AngularFireAuth
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');

		this.cancelForm = this.fb.group({
			result: 'Cancel',
			reason: this.reason,
			other: this.other,
			cancelDate: this.date,
			dealerId: this.userId,
			requestId: this.id,
		});

		this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
			if (this.authState) {
				this.userId = this.authState.uid;
			}
		});
	}

	ngOnInit() {}

	async submitCancel() {
		this.loading.showLoader();
		await this.result.createResult(this.cancelForm.value);
		await this.dealService.updateDeal(this.id, {
			visitDate: null,
			participants: { created: false },
			status: 6,
		});
		await this.dealService
			.getParticipantById(this.id, this.userId)
			.subscribe((val) => {
				val.forEach((part) => {
					this.dealService.deleteParticipant(this.id, part.payload.doc.id);
				});
			});
		await this.dealService.updateDealInDealer(this.id, { status: 'Cancel' });
		this.loading.hideLoader();
		await this.router.navigate(['/', 'home', 'deal']);
	}

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
