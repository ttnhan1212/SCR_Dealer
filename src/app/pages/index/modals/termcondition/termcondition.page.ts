import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-termcondition',
	templateUrl: './termcondition.page.html',
	styleUrls: ['./termcondition.page.scss'],
})
export class TermconditionPage implements OnInit {
	constructor(private modalController: ModalController) {}

	ngOnInit() {}

	async closeTermCondition() {
		await this.modalController.dismiss();
	}
}
