import { DealsService } from 'src/app/services/deals.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
	logo: any;
	id: string;

	ongoing: any[];
	deal: any[];
	constructor(private dealService: DealsService) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		if (localStorage.getItem('user')) {
			this.id = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	ngOnInit() {
		this.dealService.getDeal().subscribe((val) => {
			this.deal = val.map((e) => {
				return { id: e.payload.doc.id };
			});
			console.log(this.deal);
			this.deal.forEach((val) => {
				this.dealService
					.getOngoingDealWithDealer(val.id, this.id)
					.subscribe((e) => {
						this.ongoing = e.map((m) => {
							return { ...m.payload.doc.data() };
						});
					});
			});
			console.log(this.deal);
		});
	}
}
