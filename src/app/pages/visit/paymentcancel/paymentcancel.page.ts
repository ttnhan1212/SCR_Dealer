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

	now: string = new Date().toISOString();
	selectDate: Date;

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
		private loading: LoaderService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');

		this.cancelForm = this.fb.group({
			result: 'Revisit',
			reason: this.reason,
			other: this.other,
			requestId: this.id,
		});
	}

	ngOnInit() {}

	async submitCancel() {
		this.loading.showLoader();
		await this.result.createResult(this.cancelForm.value);
		await this.dealService.updateDeal(this.id, { status: 6 });
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
