import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DealerService {
	constructor(private firestore: AngularFirestore) {}

	createDealer(dealer: any, id: string) {
		return this.firestore.collection('Dealer').doc(id).set(dealer);
	}
}
