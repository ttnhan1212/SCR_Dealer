import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'app-setting',
	templateUrl: './setting.page.html',
	styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
	panelOpenState = false;

	id: string;
	constructor(
		private toast: ToastService,
		private router: Router,
		private afAuth: AngularFireAuth,
		public loadingController: LoadingController,
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.id = user.uid;
			}
		});
	}

	ngOnInit() {}

	async logOut() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		try {
			await loading.present();
			await this.afAuth.signOut();
			this.router.navigate(['login']);
			await loading.dismiss();
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
		}
	}
}
