import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-revisit',
	templateUrl: './revisit.page.html',
	styleUrls: ['./revisit.page.scss'],
})
export class RevisitPage implements OnInit {
	now: string = new Date().toISOString();
	selectDate: Date;

	files: File[] = [];

	constructor() {}

	ngOnInit() {}

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
