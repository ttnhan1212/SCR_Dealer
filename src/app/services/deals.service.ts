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
		return this.fireStore.collection('requests').snapshotChanges();
	}

	getDealerInParticipant(id: string, user: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) =>
				ref.where('userId', '==', user).where('selected', '==', true),
			)
			.valueChanges();
	}

	getOngoingDeal(id: string) {
		return this.fireStore
			.collection('Dealer')
			.doc(id)
			.collection('Deals')
			.snapshotChanges();
	}

	getDealDetail(id: string) {
		return this.fireStore.collection('requests').doc(id).snapshotChanges();
	}

	dealerToDeal(id: string, dealer: any) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.add(dealer);
	}

	addDealToDealer(id: string, deal: any) {
		return this.fireStore
			.collection('Dealer')
			.doc(id)
			.collection('Deals')
			.add(deal);
	}

	updateDeal(id: string, update: any) {
		return this.fireStore.collection('requests').doc(id).update(update);
	}

	getParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.snapshotChanges();
	}

	deleteParticipant(id: string, partId: string) {
		this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.doc(partId)
			.delete();
	}
}
