import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class DealsService {
	loggedUser: any;

	now = Math.floor(new Date().getTime() / 1000.0);

	constructor(
		private fireStore: AngularFirestore,
		private afAuth: AngularFireAuth,
	) {
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.loggedUser = user.uid;
			}
		});
	}

	getDeal() {
		return this.fireStore
			.collection('requests', (ref) =>
				ref.where('expiredTime', '>=', this.now).orderBy('expiredTime', 'desc'),
			)
			.snapshotChanges();
	}

	getDealerInParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) =>
				ref.where('userId', '==', this.loggedUser),
			)
			.snapshotChanges()
			.pipe(take(1));
	}

	getSelectedDealer(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) =>
				ref
					.where('userId', '==', this.loggedUser)
					.where('selected', '==', true),
			)
			.valueChanges();
	}

	getOngoingDeal(id: string) {
		return this.fireStore
			.collection('Dealer')
			.doc(id)
			.collection('Deals', (ref) =>
				ref.where('canceled', '==', false).orderBy('bidTime', 'desc'),
			)
			.snapshotChanges();
	}

	getDealDetail(id: string) {
		return this.fireStore.collection('requests').doc(id).snapshotChanges();
	}

	getPlateNum(id: string) {
		return this.fireStore.collection('vehicles').doc(id).snapshotChanges();
	}

	dealerToDeal(id: string, dealer: any) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.add(dealer);
	}

	addDealToDealer(dealerId: string, dealId: string, deal: any) {
		return this.fireStore
			.collection('Dealer')
			.doc(dealerId)
			.collection('Deals')
			.doc(dealId)
			.set(deal);
	}

	updateDealInDealer(id: string, val: any) {
		this.fireStore
			.collection('Dealer')
			.doc(this.loggedUser)
			.collection('Deals')
			.doc(id)
			.update(val);
	}

	updateDeal(id: string, update: any) {
		return this.fireStore.collection('requests').doc(id).update(update);
	}

	createCancelDeal(content: any) {
		return this.fireStore.collection('Result').add(content);
	}

	createPayment(id: string, content: any) {
		this.fireStore.collection('Payment').doc(id).set(content);
	}

	getParticipant(id: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants')
			.snapshotChanges();
	}

	getParticipantById(id: string, userId: string) {
		return this.fireStore
			.collection('requests')
			.doc(id)
			.collection('participants', (ref) => ref.where('userId', '==', userId))
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
			.snapshotChanges();
	}
}
