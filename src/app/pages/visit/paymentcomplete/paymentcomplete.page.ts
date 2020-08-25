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
	constructor(public dealService: DealsService, public route: ActivatedRoute) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
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
	completeRequest() {
		this.dealService.updateDeal(this.id, { status: 'Complete' });
	}
	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
