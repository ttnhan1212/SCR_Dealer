import { ActivatedRoute, Router } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-certificationupload',
	templateUrl: './certificationupload.page.html',
	styleUrls: ['./certificationupload.page.scss'],
})
export class CertificationuploadPage implements OnInit {
	id: string;

	files: File[] = [];
	isShow = false;

	constructor(
		translate: TranslateService,
		private dealService: DealsService,
		public route: ActivatedRoute,
		public router: Router
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {}

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
		if (this.files) {
			this.isShow = !this.isShow;
		}
	}

	paymentComplete() {
		this.dealService.updateDeal(this.id, { status: 11 });
	}
}
