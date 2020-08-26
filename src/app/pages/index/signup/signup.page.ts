import { File } from '@ionic-native/file/ngx';
import { DealerService } from './../../../services/dealer.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
	LoadingController,
	ActionSheetController,
	Platform,
} from '@ionic/angular';

import { ToastService } from 'src/app/services/toast.service';

import { ModalController } from '@ionic/angular';
import { PrivatepolicyPage } from './../modals/privatepolicy/privatepolicy.page';
import { PuagreementPage } from './../modals/puagreement/puagreement.page';
import { TermconditionPage } from './../modals/termcondition/termcondition.page';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import {
	AngularFireStorage,
	AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import {
	CameraSource,
	Plugins,
	CameraResultType,
	CameraPhoto,
} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

const { Camera } = Plugins;

// export interface MyData {
// 	name: string;
// 	filepath: string;
// 	size: number;
// }

const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	// cordovaImages: any = [];
	// image: string;
	// newImage: string;

	imageSource: CameraPhoto;
	imagePreview: string = IMG_AVT_DEFAULT;
	checkBoxList: any;
	isIndeterminate: boolean;
	masterCheck: boolean;

	photo: SafeResourceUrl;

	userId: string;

	signupForm: FormGroup;
	email = new FormControl(
		'',
		Validators.compose([
			Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
			Validators.required,
		]),
	);
	password = new FormControl(
		'',
		Validators.compose([Validators.minLength(8), Validators.required]),
	);
	cPassword = new FormControl('', Validators.required);
	orgname = new FormControl('', Validators.required);
	phonenum = new FormControl(null, Validators.required);
	faxnum = new FormControl(
		null,
		Validators.compose([Validators.required, Validators.minLength(10)]),
	);
	ceoname = new FormControl('', Validators.required);
	address = new FormControl('', Validators.required);

	selectedFile: any;

	// Upload Task
	// task: AngularFireUploadTask;

	// Progress in percentage
	percentage: Observable<number>;

	// Uploaded File URL
	UploadedFileURL: Observable<string>;

	//Uploaded Image List
	// images: Observable<MyData[]>;

	//File details
	fileName: string;
	fileSize: number;

	//Status check
	isUploading: boolean;
	isUploaded: boolean;

	// private imageCollection: AngularFirestoreCollection<MyData>;

	@ViewChild('pick', { static: false }) pick: ElementRef<HTMLInputElement>;

	constructor(
		public afAuth: AngularFireAuth,
		private router: Router,
		public loadingController: LoadingController,
		private toast: ToastService,
		private modalController: ModalController,
		private authService: AuthService,
		private dealerService: DealerService,
		private fb: FormBuilder,
		private storage: AngularFireStorage,
		private afs: AngularFirestore, // private file: File,
		private actionSheetCtrl: ActionSheetController,
		private plt: Platform,
		private sanitizer: DomSanitizer,
		private translate: TranslateService,
	) {
		this.checkBoxList = [
			{
				id: 1,
				value: 'Privacy Policy',
				isChecked: false,
			},
			{
				id: 2,
				value: 'Terms & Condition',
				isChecked: false,
			},
			{
				id: 3,
				value: 'Privacy Usage Agreement',
				isChecked: false,
			},
		];

		this.isUploading = false;
		this.isUploaded = false;
		//Set collection where our documents/ images info will save
		// this.images = this.imageCollection.valueChanges();

		this.signupForm = this.fb.group({
			email: this.email,
			password: this.password,
			cPassword: this.cPassword,
			orgname: this.orgname,
			phone: this.phonenum,
			fax: this.faxnum,
			ceoName: this.ceoname,
			address: this.address,
		});

		translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('kr');
	}

	// PickImages() {
	// 	var options: ImagePickerOptions = {
	// 		maximumImagesCount: 1,
	// 		width: 100,
	// 		height: 100,
	// 	};

	// 	this.imagePicker.getPictures(options).then((results) => {
	// 		for (var i = 0; i < results.length; i++) {
	// 			let filename = results[i].substring(results[i].lastIndexOf('/') + 1);
	// 			let path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
	// 			this.file.readAsDataURL(path, filename).then((base64string) => {
	// 				this.cordovaImages.push(base64string);
	// 			});
	// 		}
	// 	});
	// }

	// handleFileInput(files: File[]) {
	// 	this.imageSource = files[0];
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(files[0]);
	// 	reader.onload = (e: any) => {
	// 		this.imagePreview = e.target.result || IMG_AVT_DEFAULT;
	// 	};
	// 	console.log(this.imageSource.name);
	// }

	handleFileInput(event) {
		try {
			const file = event.target.files[0];
			const pattern = /image-*/;
			const reader = new FileReader();
			reader.readAsDataURL(file);
			if (!file.type.match(pattern)) {
				console.log('File format not supported');
				return;
			}

			reader.onload = (e: any) => {
				this.photo = e.target.result || IMG_AVT_DEFAULT;
			};
			this.imageSource = event.target.files[0];
		} catch (error) {
			console.log(error.message);
		}
	}

	async selectImageSource() {
		const buttons = [
			{
				text: 'Take Photo',
				icon: 'camera',
				handler: () => {
					this.addImage(CameraSource.Camera);
				},
			},
			{
				text: 'Choose Image From Gallery',
				icon: 'image',
				handler: () => {
					this.addImage(CameraSource.Photos);
				},
			},
		];

		// Only allow file selection inside a browser
		if (!this.plt.is('hybrid')) {
			buttons.push({
				text: 'Choose a File',
				icon: 'attach',
				handler: () => {
					this.pick.nativeElement.click();
				},
			});
		}

		const actionSheet = await this.actionSheetCtrl.create({
			header: 'Select Image Source',
			buttons,
		});
		await actionSheet.present();
	}

	async addImage(source: CameraSource) {
		const image = await Camera.getPhoto({
			quality: 100,
			width: 400,
			allowEditing: false,
			resultType: CameraResultType.DataUrl,
			source,
		});
		this.imageSource = image;

		// const blobData = this.b64toBlob(
		// 	image.base64String,
		// 	`image/${image.format}`,
		// );
		// const imageName = 'Give me a name';
		this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
			image && image.dataUrl,
		);
	}

	ngOnInit() {}

	async privatePolicyModal() {
		const modal = await this.modalController.create({
			component: PrivatepolicyPage,
		});
		return await modal.present();
	}

	async termConditionModal() {
		const modal = await this.modalController.create({
			component: TermconditionPage,
		});
		return await modal.present();
	}

	async PuaModal() {
		const modal = await this.modalController.create({
			component: PuagreementPage,
		});
		return await modal.present();
	}

	checkMaster() {
		setTimeout(() => {
			this.checkBoxList.forEach((obj) => {
				obj.isChecked = this.masterCheck;
			});
		});
	}

	checkEvent() {
		const totalItems = this.checkBoxList.length;
		let checked = 0;
		this.checkBoxList.map((obj) => {
			if (obj.isChecked) checked++;
			// console.log(obj.isChecked);
		});
		if (checked > 0 && checked < totalItems) {
			//If even one item is checked but not all
			this.isIndeterminate = true;
			this.masterCheck = false;
		} else if (checked == totalItems) {
			//If all are checked
			this.masterCheck = true;
			this.isIndeterminate = false;
		} else {
			//If none is checked
			this.isIndeterminate = false;
			this.masterCheck = false;
		}
	}

	modalNavigate(id) {
		let checkboxId = id;
		//let messageId = el.dataset.messageId;

		if (checkboxId === 1) {
			this.privatePolicyModal();
		} else {
			if (checkboxId === 2) {
				this.termConditionModal();
			} else if (checkboxId === 3) {
				this.PuaModal();
			}
		}
	}

	uploadFile(user: string) {
		// The File object
		const blobData = this.b64toBlob(
			this.imageSource.base64String,
			'image/jpeg',
			512,
		);

		// Validation for Images Only
		// if (file.type.split('/')[0] !== 'image') {
		// 	console.error('unsupported file type :( ');
		// 	return;
		// }

		this.isUploading = true;
		this.isUploaded = false;

		// File name

		// The storage path
		//const i = `user-image/${new Date().getTime()}_${file.name}`;
		const path = `user-image/${new Date().getTime()}`;
		// Totally optional metadata
		const customMetadata = { app: 'SCRoads Image Upload' };

		// File reference
		const fileRef = this.storage.ref(path);

		// The main task
		const task = this.storage.upload(path, blobData, { customMetadata });

		// Get file progress percentage
		this.percentage = task.percentageChanges();

		task
			.snapshotChanges()
			.pipe(
				finalize(() => {
					this.UploadedFileURL = fileRef.getDownloadURL();
					this.UploadedFileURL.subscribe(
						(url) => {
							console.log(url);
							if (url) {
								this.dealerService.updateDealerImage(
									{
										name: 'Hudson',
										filepath: url,
									},
									user,
								);

								this.isUploading = false;
								this.isUploaded = true;
							}
						},
						(error) => {
							console.error(error);
						},
					);
				}),
			)
			.subscribe((url) => {
				if (url) {
					console.log(url);
				}
			});
	}

	async signupDealer() {
		const { email, password, cPassword } = this.signupForm.value;
		if (password !== cPassword) {
			this.toast.showToast('Password not match, Please try again!');
		} else {
			const loading = await this.loadingController.create({
				message: 'Please wait...',
				showBackdrop: true,
			});
			try {
				await loading.present();
				await this.authService.signup(email, password);
				await this.afAuth.onAuthStateChanged((user) => {
					if (user) {
						this.userId = user.uid;
						this.dealerService.createDealer(this.signupForm.value, user.uid);
					}
				});
				await this.uploadFile(this.userId);
				await loading.dismiss();
				// await this.router.navigate(['/', 'login']);
			} catch (error) {
				if (!this.signupForm.valid) {
					this.toast.showToast(this.signupForm.errors.message);
				}
				this.toast.showToast(error.message);
				await loading.dismiss();
			}
		}
	}

	// Helper function
	// https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
	b64toBlob(b64Data, contentType = '', sliceSize = 512) {
		const byteCharacters = atob(b64Data);
		const byteArrays = [];
		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);

			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		const blob = new Blob(byteArrays, { type: contentType });

		return blob;
	}
}
