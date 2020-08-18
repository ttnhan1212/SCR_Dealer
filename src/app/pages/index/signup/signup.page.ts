import { DealerService } from './../../../services/dealer.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
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
import { map, finalize, tap } from 'rxjs/operators';
import {
	AngularFirestoreCollection,
	AngularFirestore,
} from '@angular/fire/firestore';
import { ThrowStmt } from '@angular/compiler';
import {
	ImagePicker,
	ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

export interface MyData {
	name: string;
	filepath: string;
	size: number;
}

const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	cordovaImages: any = [];
	image: string;
	newImage: string;
	imageSource: any;
	imagePreview: string = IMG_AVT_DEFAULT;
	checkBoxList: any;
	isIndeterminate: boolean;
	masterCheck: boolean;

	userId: string;

	signupForm: FormGroup;
	email = new FormControl(
		'',
		Validators.compose([
			Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
			Validators.required,
		])
	);
	password = new FormControl(
		'',
		Validators.compose([Validators.minLength(8), Validators.required])
	);
	cPassword = new FormControl('', Validators.required);
	orgname = new FormControl('', Validators.required);
	phonenum = new FormControl(null, Validators.required);
	faxnum = new FormControl(
		null,
		Validators.compose([Validators.required, Validators.minLength(10)])
	);
	ceoname = new FormControl('', Validators.required);
	address = new FormControl('', Validators.required);

	selectedFile: any;

	// Upload Task
	task: AngularFireUploadTask;

	// Progress in percentage
	percentage: Observable<number>;

	// Snapshot of uploading file
	snapshot: Observable<any>;

	// Uploaded File URL
	UploadedFileURL: Observable<string>;

	//Uploaded Image List
	images: Observable<MyData[]>;

	//File details
	fileName: string;
	fileSize: number;

	//Status check
	isUploading: boolean;
	isUploaded: boolean;

	downloadURL: Observable<string>;

	private imageCollection: AngularFirestoreCollection<MyData>;

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
		private afs: AngularFirestore,
		private imagePicker: ImagePicker,
		private file: File
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
	}

	PickImages() {
		var options: ImagePickerOptions = {
			maximumImagesCount: 1,
			width: 100,
			height: 100,
		};

		this.imagePicker.getPictures(options).then((results) => {
			for (var i = 0; i < results.length; i++) {
				let filename = results[i].substring(results[i].lastIndexOf('/') + 1);
				let path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
				this.file.readAsDataURL(path, filename).then((base64string) => {
					this.cordovaImages.push(base64string);
				});
			}
		});
	}

	//   handleFileInput(files: File[]) {
	//     this.imageSource = files[0];
	//     let reader = new FileReader();
	//     reader.readAsDataURL(files[0]);
	//     reader.onload = (e: any) => {
	//       this.imagePreview = e.target.result || IMG_AVT_DEFAULT;
	//     };
	//     console.log(this.imageSource.name);
	//   }

	onFileSelected($event) {
		var n = $event.target.files[0].name;
		const file = $event.target.files[0];
		const filePath = `user-image/` + `${n}`;
		const fileRef = this.storage.ref(filePath);
		const task = this.storage.upload(`user-image/` + `${n}`, file);
		task
			.snapshotChanges()
			.pipe(
				finalize(() => {
					this.downloadURL = fileRef.getDownloadURL();
					this.downloadURL.subscribe((url) => {
						if (url) {
							this.newImage = url;
							this.image = this.newImage;
						}
					});
				})
			)
			.subscribe((url) => {
				if (url) {
				}
			});
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
		const file = this.imageSource;

		// Validation for Images Only
		if (file.type.split('/')[0] !== 'image') {
			console.error('unsupported file type :( ');
			return;
		}

		this.isUploading = true;
		this.isUploaded = false;

		this.fileName = file.name;

		// The storage path
		const path = `user-image/${new Date().getTime()}_${file.name}`;

		// Totally optional metadata
		const customMetadata = { app: 'SCRoads Image Upload Demo' };

		//File reference
		const fileRef = this.storage.ref(path);

		// The main task
		this.task = this.storage.upload(path, file, { customMetadata });

		this.UploadedFileURL = fileRef.getDownloadURL();
		this.UploadedFileURL.subscribe(
			(resp) => {
				this.dealerService.updateDealer(
					{
						name: file.name,
						filepath: resp,
						size: this.fileSize,
					},
					user
				);
				this.isUploading = false;
				this.isUploaded = true;
			},
			(error) => {
				console.error(error);
			}
		);

		// Get file progress percentage
		// this.percentage = this.task.percentageChanges();
		// this.snapshot = this.task.snapshotChanges().pipe(
		// 	finalize(() => {
		// 		// Get uploaded file storage path
		// 		this.UploadedFileURL = fileRef.getDownloadURL();

		// 		this.UploadedFileURL.subscribe(
		// 			(resp) => {
		// 				this.dealerService.updateDealer(
		// 					// {
		// 					// 	name: file.name,
		// 					// 	filepath: resp,
		// 					// 	size: this.fileSize,
		// 					// },
		// 					resp,
		// 					user,
		// 				);
		// 				this.isUploading = false;
		// 				this.isUploaded = true;
		// 			},
		// 			(error) => {
		// 				console.error(error);
		// 			},
		// 		);
		// 	}),
		// 	tap((snap) => {
		// 		this.fileSize = snap.totalBytes;
		// 	}),
		// );
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
			} catch (error) {
				if (!this.signupForm.valid) {
					this.toast.showToast(this.signupForm.errors.message);
				}
				this.toast.showToast(error.message);
				await loading.dismiss();
			}
		}
	}
}
