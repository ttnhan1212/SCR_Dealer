import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ongoing',
	templateUrl: './ongoing.page.html',
	styleUrls: ['./ongoing.page.scss'],
})
export class OngoingPage implements OnInit {
	logo: any;
	constructor() {
		this.logo = '../../../assets/images/logo/scroadslight.svg';
	}

	ngOnInit() {}
}
