import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user: User;

	constructor(
		public afAuth: AngularFireAuth,
		public router: Router,
		private toast: ToastService,
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.user = user;
				localStorage.setItem('user', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user', null);
			}
		});
	}

	async login(email: string, password: string) {
		await this.afAuth.signInWithEmailAndPassword(email, password);
		this.router.navigate(['home', 'deal']);
	}

	async signup(email: string, password: string) {
		await this.afAuth.createUserWithEmailAndPassword(email, password);
		await this.toast.showToast('Your account have been created, Please login!');
		this.router.navigate(['login']);
	}

	async logout() {
		await this.afAuth.signOut();
		this.router.navigate(['login']);
	}
}
