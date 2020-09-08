import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from 'firebase';

@Injectable({
	providedIn: 'root',
})
export class DealsService {
	loggedUser: any;

	constructor(
		private fireStore: AngularFirestore,
		private afAuth: AngularFireAuth,
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.loggedUser = user;
			}
		});
	}

	getDeal() {
		return this.fireStore.collection('requests').snapshotChanges();
	}

	getDealerInParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) =>
				ref.where('userId', '==', this.loggedUser.uid),
			)
			.valueChanges();
	}

	getSelectedDealer(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) =>
				ref
					.where('userId', '==', this.loggedUser.uid)
					.where('selected', '==', true),
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

	addDealToDealer(dealId: string, deal: any) {
		return this.fireStore
			.collection('Dealer')
			.doc(this.loggedUser.uid)
			.collection('Deals')
			.doc(dealId)
			.set(deal);
	}

	deleteDeal(id: string) {
		this.fireStore
			.collection('Dealer')
			.doc(this.loggedUser.uid)
			.collection('Deals')
			.doc(id)
			.delete();
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

	getUnselectParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) => ref.where('selected', '==', false))
			.snapshotChanges();
	}

	getSelectedParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) => ref.where('selected', '==', true))
			.valueChanges();
	}
}
