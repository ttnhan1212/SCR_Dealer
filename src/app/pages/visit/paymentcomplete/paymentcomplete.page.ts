import { AngularFireAuth } from '@angular/fire/auth';
import { LoaderService } from './../../../services/loader.service';
import { PaymentService } from './../../../services/payment.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealsService } from './../../../services/deals.service';
import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-paymentcomplete',
	templateUrl: './paymentcomplete.page.html',
	styleUrls: ['./paymentcomplete.page.scss'],
})
export class PaymentcompletePage implements OnInit {
	id: string;
	now: string = new Date().toISOString();
	selectDate: Date;
	files: File[] = [];
	userId: string;

	completeForm: FormGroup;
	finalAmount = new FormControl(null);
	other = new FormControl('');

	purchase_date = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		public dealService: DealsService,
		public route: ActivatedRoute,
		private router: Router,
		private translate: TranslateService,
		private payment: PaymentService,
		private result: ResultService,
		private fb: FormBuilder,
		private loading: LoaderService,
		private afAuth: AngularFireAuth
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');

		this.completeForm = this.fb.group({
			result: 'Purchase Confirm',
			final_amount: this.finalAmount,
			other: this.other,
			requestId: this.id,
		});
	}
	ngOnInit() {}

	async getUser() {
		await this.loading.showLoader();
		await this.afAuth.authState.subscribe((authState) => {
			if (authState) {
				this.userId = authState.uid;
			}
		});
		await this.loading.hideLoader();
	}

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	async completeRequest() {
		const { finalAmount } = this.completeForm.value;
		let content = {
			request_id: this.id,
			final_amount: finalAmount ? finalAmount : 0,
			dealer_id: this.userId,
			purchase_date: this.purchase_date,
		};
		await this.result.createResult(this.completeForm.value);
		await this.dealService.updateDeal(this.id, { status: 9 });
		await this.payment.createPayment(content);
		await this.router.navigate(['/', 'home', 'certificationupload', this.id]);
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
