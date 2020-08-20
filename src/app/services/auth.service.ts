import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		public afAuth: AngularFireAuth,
		public router: Router,
		private toast: ToastService,
	) {}

	async login(email: string, password: string) {
		await this.afAuth.signInWithEmailAndPassword(email, password);
		this.router.navigate(['home', 'deal']);
	}

	async signup(email: string, password: string) {
		await this.afAuth.createUserWithEmailAndPassword(email, password);
		await this.toast.showToast('Your account have been created, Please login!');
		// this.router.navigate(['login']);
	}

	async logout() {
		await this.afAuth.signOut();
		this.router.navigate(['login']);
	}
}
