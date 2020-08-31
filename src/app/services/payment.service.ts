import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class PaymentService {
	constructor(private fireStore: AngularFirestore) {}

	createPayment(content: any) {
		this.fireStore.collection('Payment').add(content);
	}
}
