import { PaymentService } from './../../../services/payment.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { DealsService } from './../../../services/deals.service';
import { Component, OnInit } from '@angular/core';

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
	constructor(
		public dealService: DealsService,
		public route: ActivatedRoute,
		private translate: TranslateService,
		private payment: PaymentService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
	}
	ngOnInit() {}
	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}
	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
	async completeRequest() {
		let content = {
			requestId: this.id,
		};
		await this.dealService.updateDeal(this.id, { status: 8 });
		await this.payment.createPayment(content);
	}
	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
