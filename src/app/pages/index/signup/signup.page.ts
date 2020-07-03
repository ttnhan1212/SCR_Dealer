import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	email: string;
	password: string;
	cPassword: string;

	constructor(
		public afAuth: AngularFireAuth,
		private router: Router,
		public loadingController: LoadingController,
		private toast: ToastService,
	) {}

	ngOnInit() {}

	async signup() {
		const { email, password } = this;
		if (this.password !== this.cPassword) {
			this.toast.showToast('Password not match, Please try again!');
		} else {
			const loading = await this.loadingController.create({
				message: 'Please wait...',
				showBackdrop: true,
			});
			try {
				await loading.present();
				await this.afAuth.createUserWithEmailAndPassword(email, password);
				this.toast.showToast('Your account have been created, Please login!');
				this.router.navigate(['login']);
				await loading.dismiss();
				return true;
			} catch (error) {
				this.toast.showToast(error.message);
				await loading.dismiss();
				return false;
			}
		}
	}
}
