import { LoaderService } from './../../../services/loader.service';
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

	imageSource: any;
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
	orgName = new FormControl('', Validators.required);
	phone = new FormControl(null, Validators.required);
	fax = new FormControl(
		null,
		Validators.compose([Validators.required, Validators.minLength(10)]),
	);
	ceoName = new FormControl('', Validators.required);
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

	dateObj = new Date();
	now = null;

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
		private loader: LoaderService,
	) {
		this.checkBoxList = [
			{
				id: 1,
				value: '개인정보 수집',
				isChecked: false,
			},
			{
				id: 2,
				value: '이용약관',
				isChecked: false,
			},
			{
				id: 3,
				value: '개인정보 이용동의',
				isChecked: false,
			},
		];

		this.isUploading = false;
		this.isUploaded = false;
		//Set collection where our documents/ images info will save
		// this.images = this.imageCollection.valueChanges();

		this.dateObj.setMinutes(0);
		this.dateObj.setSeconds(0);
		this.now = Math.floor(this.dateObj.getTime() / 1000);

		this.signupForm = this.fb.group({
			email: this.email,
			password: this.password,
			cPassword: this.cPassword,
			orgName: this.orgName,
			phone: this.phone,
			fax: this.fax,
			ceoName: this.ceoName,
			address: this.address,
			requestTime: this.now,
		});

		this.translate.addLangs(['en', 'kr']);

		// this language will be used as a fallback when a translation isn't found in the current language
		this.translate.setDefaultLang('kr');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		this.translate.use('kr');
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

		this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
			image && image.dataUrl,
		);

		this.imageSource = image.dataUrl;
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

	// Upload image
	async uploadFile(name: string, id: string) {
		// Path name
		const pathName = `${name}_${Math.floor(new Date().getTime() / 1000)}`;
		// The storage path
		const path = `user-image/`;
		// Totally optional metadata
		const customMetadata = { app: 'SCRoads Image Upload' };

		// File reference
		const storageRef = this.storage.ref(`${path}${pathName}`);

		storageRef.putString(this.imageSource, 'data_url', {
			contentType: 'image/jpeg',
		});

		// The main task
		const task = this.storage.upload(
			`${path}${pathName}`,
			this.dataURItoBlob(this.imageSource),
			{
				customMetadata,
			},
		);

		// Upload task
		await task
			.snapshotChanges()
			.pipe(
				finalize(() => {
					this.UploadedFileURL = storageRef.getDownloadURL();
					this.UploadedFileURL.subscribe(
						(url) => {
							console.log(url);
							if (url) {
								this.authService.updateRegisterDealer(id, {
									name: pathName,
									image: url,
								});
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
		const { password, cPassword } = this.signupForm.value;
		if (password !== cPassword) {
			this.toast.showToast('Password not match, Please try again!');
		} else {
			try {
				await this.loader.showLoader();
				await this.authService
					.registerDealer(this.signupForm.value)
					.then((doc) => {
						this.uploadFile(this.signupForm.value.ceoName, doc.id);
					});
				await this.toast.showToast(
					'Your request have been submitted, Please wait!',
				);

				await this.loader.hideLoader();
				await this.router.navigate(['/', 'login']);
			} catch (error) {
				if (!this.signupForm.valid) {
					this.toast.showToast(this.signupForm.errors.message);
				}
				this.toast.showToast(error.message);
				await this.loader.hideLoader();
			}
		}
	}

	// Helper function
	// https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
	// b64toBlob(b64Data, contentType = '', sliceSize = 512) {
	// 	const byteCharacters = atob(b64Data);
	// 	const byteArrays = [];
	// 	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	// 		const slice = byteCharacters.slice(offset, offset + sliceSize);

	// 		const byteNumbers = new Array(slice.length);
	// 		for (let i = 0; i < slice.length; i++) {
	// 			byteNumbers[i] = slice.charCodeAt(i);
	// 		}

	// 		const byteArray = new Uint8Array(byteNumbers);
	// 		byteArrays.push(byteArray);
	// 	}

	// 	const blob = new Blob(byteArrays, { type: contentType });

	// 	return blob;
	// }

	// Helper function
	// https://gist.github.com/davoclavo/4424731
	dataURItoBlob(dataURI: any) {
		// convert base64 to raw binary data held in a string
		let byteString = atob(dataURI.split(',')[1]);

		// separate out the mime component
		let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

		// write the bytes of the string to an ArrayBuffer
		let arrayBuffer = new ArrayBuffer(byteString.length);
		let _ia = new Uint8Array(arrayBuffer);
		for (let i = 0; i < byteString.length; i++) {
			_ia[i] = byteString.charCodeAt(i);
		}

		let dataView = new DataView(arrayBuffer);
		let blob = new Blob([dataView], { type: mimeString });
		return blob;
	}
}
