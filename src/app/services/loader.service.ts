import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoaderService {
	constructor(public loadingController: LoadingController) {}

	async showLoader() {
		await this.loadingController
			.create({
				message: 'Please wait...',
				showBackdrop: true,
			})
			.then((res) => {
				res.present();
			});
	}

	async hideLoader() {
		await this.loadingController
			.dismiss()
			.then((res) => {
				console.log('Loading dismissed!', res);
			})
			.catch((err) => {
				console.log('error', err);
			});
	}
}
