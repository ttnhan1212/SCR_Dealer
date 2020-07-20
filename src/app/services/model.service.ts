import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root',
})
export class ModelService {
	constructor(private firestore: AngularFirestore) {}

	getModel() {
		return this.firestore.collection('models').snapshotChanges();
	}
}
