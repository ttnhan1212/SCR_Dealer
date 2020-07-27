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
	constructor(private dealService: DealsService) {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
		if (localStorage.getItem('user')) {
			this.id = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	ngOnInit() {
		this.dealService.getOngoingDeal(this.id).subscribe((val) => {
			this.ongoing = val.map((e) => {
				return {
					...e.payload.doc.data(),
				};
			});
			this.ongoing.forEach((val) => {
				this.dealService.getDealDetail(val.dealId).subscribe((m) => {
					val.deal = {
						...(m.payload.data() as {}),
					};
				});
			});
			console.log(this.ongoing);
		});
	}
}
