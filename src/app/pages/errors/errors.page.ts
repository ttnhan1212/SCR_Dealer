import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-errors',
	templateUrl: './errors.page.html',
	styleUrls: ['./errors.page.scss'],
})
export class ErrorsPage implements OnInit {
	constructor(private router: Router, private translate: TranslateService) {}

	ngOnInit() {}

	navigateHome = () => {
		this.router.navigate(['home', 'deal']);
	};
}
