import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class NotiService {
	constructor(private firestore: AngularFirestore) {}

	getNoti(id: string) {
		return this.firestore
			.collection('notifications', (ref) => ref.where('user', '==', id))
			.snapshotChanges();
	}

	createNoti(noti: any) {
		return this.firestore.collection('notifications').add(noti);
	}
}
