import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DealerService {
	constructor(private firestore: AngularFirestore) {}

	getDealer(id: string) {
		return this.firestore.collection('Dealer').doc(id).get();
	}

	createDealer(dealer: any, id: string) {
		return this.firestore.collection('Dealer').doc(id).set(dealer);
	}

	updateDealer(content: any, id: string) {
		return this.firestore.collection('Dealer').doc(id).update(content);
	}

	updateDealerImage(content: any, id: string) {
		return this.firestore
			.collection('Dealer')
			.doc(id)
			.collection('Images')
			.add(content);
	}
}
