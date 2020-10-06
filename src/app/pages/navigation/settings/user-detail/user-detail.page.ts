import { LoaderService } from './../../../../services/loader.service';
import { TranslateService } from '@ngx-translate/core';
import { DealerService } from './../../../../services/dealer.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.page.html',
	styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
	id: string;
	userId: string;
	dealer: any;

	imagePreview: string = IMG_AVT_DEFAULT;

	editForm: FormGroup = new FormGroup({
		email: new FormControl(
			'',
			Validators.compose([
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
				Validators.required,
			]),
		),
		password: new FormControl(
			'',
			Validators.compose([Validators.minLength(8), Validators.required]),
		),
		cPassword: new FormControl('', Validators.required),
		orgName: new FormControl('', Validators.required),
		phone: new FormControl(null, Validators.required),
		fax: new FormControl(
			null,
			Validators.compose([Validators.required, Validators.minLength(10)]),
		),
		ceoName: new FormControl('', Validators.required),
		address: new FormControl('', Validators.required),
	});

	selectedFile: any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private afAuth: AngularFireAuth,
		private fb: FormBuilder,
		private storage: AngularFireStorage,
		private dealerService: DealerService,
		public loader: LoaderService,
		translate: TranslateService,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		await this.loader.showLoader();
		await this.afAuth.currentUser.then((user) => {
			if (user) {
				this.userId = user.uid;
				console.log(user.uid);

				this.getDealer(this.userId);
			}
		});
		await this.loader.hideLoader();
	}

	getDealer(id: string) {
		this.dealerService.getDealer(id).subscribe((val) => {
			this.dealer = val.data();
			this.editForm.patchValue({
				email: this.dealer.email,
				orgName: this.dealer.orgName,
				ceoName: this.dealer.ceoName,
				phone: this.dealer.phone,
				address: this.dealer.address,
			});
		});
	}
}
