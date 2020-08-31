import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-privatepolicy',
	templateUrl: './privatepolicy.page.html',
	styleUrls: ['./privatepolicy.page.scss'],
})
export class PrivatepolicyPage implements OnInit {
	constructor(
		private modalController: ModalController,
		translate: TranslateService,
	) {
		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {}

	async closePrivatePolicyModal() {
		await this.modalController.dismiss();
	}
}
