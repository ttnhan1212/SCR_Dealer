import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-result',
	templateUrl: './result.page.html',
	styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
	id: string;

	constructor(private route: ActivatedRoute) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {}
}
