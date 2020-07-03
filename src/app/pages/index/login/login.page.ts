import { ToastService } from '../../../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	email: string;
	password: string;

	constructor(
		public afAuth: AngularFireAuth,
		private router: Router,
		public loadingController: LoadingController,
		private toast: ToastService,
	) {}

	ngOnInit() {}

	async login() {
		const { email, password } = this;
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		try {
			await loading.present();
			await this.afAuth.signInWithEmailAndPassword(email, password);
			this.router.navigate(['home/deal']);
			await loading.dismiss();
			return true;
		} catch (error) {
			this.toast.showToast(error.message);
			await loading.dismiss();
			return false;
		}
	}
}
