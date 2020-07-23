import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DealsService {
	loggedUser: any;

	constructor(private fireStore: AngularFirestore) {
		if (this.isLoggedIn === true) {
			this.loggedUser = JSON.parse(localStorage.getItem('user')).uid;
		}
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}

	getDeal() {
		return this.fireStore
			.collection('requests', (ref) => ref.limit(10))
			.snapshotChanges();
	}

	getDealDetail(id: string) {
		return this.fireStore.collection('requests').doc(id).snapshotChanges();
	}

	dealerToDeal(id: string, dealer: any) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('pacticipants')
			.add(dealer);
	}
}
