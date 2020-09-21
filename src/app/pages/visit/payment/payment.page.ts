import { LoaderService } from './../../../services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.page.html',
	styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
	id: string;
	deal: any;

	constructor(
		private dealService: DealsService,
		public route: ActivatedRoute,
		public router: Router,
		private loader: LoaderService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getDealDetail();
	}

	async getDealDetail() {
		await this.loader.showLoader();
		await this.dealService.getDealDetail(this.id).subscribe((val) => {
			this.deal = val.payload.data();
			this.loader.hideLoader();
			console.log(this.deal);
		});
	}
}
