import { DealsService } from 'src/app/services/deals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from './../../../services/loader.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ResultService } from './../../../services/result.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-revisit',
	templateUrl: './revisit.page.html',
	styleUrls: ['./revisit.page.scss'],
})
export class RevisitPage implements OnInit {
	id: string;
	now: string = new Date().toISOString();
	selectDate: Date;

	files: File[] = [];

	revisitForm: FormGroup;
	reason = new FormControl('');
	other = new FormControl('');
	date = new FormControl('');

	constructor(
		translate: TranslateService,
		private result: ResultService,
		private fb: FormBuilder,
		private loading: LoaderService,
		private afAuth: AngularFireAuth,
		public route: ActivatedRoute,
		public router: Router,
		private dealService: DealsService
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');

		this.revisitForm = this.fb.group({
			result: 'Revisit',
			reason: this.reason,
			other: this.other,
			requestId: this.id,
			date: this.date,
		});
	}

	ngOnInit() {}

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	async revisitSubmit() {
		const { date } = this.revisitForm.value;
		let time = new Date(date);
		let unix = Math.floor(time.getTime() / 1000.0);
		this.revisitForm.patchValue({
			date: unix,
		});
		await this.dealService.updateDeal(this.id, { visitDate: unix });
		await this.result.createResult(this.revisitForm.value);
		await this.router.navigate(['/', 'home', 'ongoing']);
	}

	localeDate(time: number) {
		const myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
