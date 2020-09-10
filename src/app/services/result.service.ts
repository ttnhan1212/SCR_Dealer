import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ResultService {
	constructor(private fireStore: AngularFirestore) {}

	createResult(content: any) {
		this.fireStore.collection('Result').add(content);
	}
}
