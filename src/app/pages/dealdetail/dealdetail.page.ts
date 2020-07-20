import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dealdetail',
	templateUrl: './dealdetail.page.html',
	styleUrls: ['./dealdetail.page.scss'],
})
export class DealdetailPage implements OnInit {
	slideOpts = {
		initialSlide: 1,
		speed: 400,
	};

	constructor() {}

	ngOnInit() {}
}
