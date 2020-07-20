import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DealsService {
	loggedUser: any;

	constructor(private firestore: AngularFirestore) {
		if (this.isLoggedIn === true) {
			this.loggedUser = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	getDeal() {
		return this.firestore
			.collection('requests', (ref) => ref.limit(10))
			.snapshotChanges();
	}
}
