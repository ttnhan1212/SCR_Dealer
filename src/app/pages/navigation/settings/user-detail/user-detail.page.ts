import { LoadingController } from '@ionic/angular';
import { DealerService } from './../../../../services/dealer.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import {
	AngularFireUploadTask,
	AngularFireStorage,
} from '@angular/fire/storage';

export interface MyData {
	name: string;
	filepath: string;
	size: number;
}

const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.page.html',
	styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
	id: string;
	userId: string;

	image: string;
	newImage: string;
	imageSource: File;
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
		orgname: new FormControl('', Validators.required),
		phone: new FormControl(null, Validators.required),
		fax: new FormControl(
			null,
			Validators.compose([Validators.required, Validators.minLength(10)]),
		),
		ceoName: new FormControl('', Validators.required),
		address: new FormControl('', Validators.required),
	});

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
		private router: Router,
		private route: ActivatedRoute,
		private afAuth: AngularFireAuth,
		private fb: FormBuilder,
		private storage: AngularFireStorage,
		private dealerService: DealerService,
		public loadingController: LoadingController,
	) {
		this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
	}

	ngOnInit() {
		this.getUser();
	}

	async getUser() {
		const loading = await this.loadingController.create({
			message: 'Please wait...',
			showBackdrop: true,
		});
		await loading.present();
		await this.afAuth.authState.subscribe((authState) => {
			if (authState) {
				this.userId = authState.uid;
				this.getDealer(this.userId);
			}
		});
		await loading.dismiss();
	}

	getDealer(id: string) {
		this.dealerService.getDealer(id).subscribe((val) => {
			this.editForm.setValue({
				email: val.data().email,
				password: '',
				cPassword: '',
				orgname: val.data().orgname,
				phone: val.data().phone,
				fax: val.data().fax,
				ceoName: val.data().ceoName,
				address: val.data().address,
			});
		});
	}

	handleFileInput(files: File[]) {
		this.imageSource = files[0];
		let reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = (e: any) => {
			this.imagePreview = e.target.result || IMG_AVT_DEFAULT;
		};
		console.log(this.imageSource.name);
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
		// this.UploadedFileURL.subscribe(
		// 	(resp) => {
		// 		this.dealerService.updateDealer(
		// 			{
		// 				name: file.name,
		// 				filepath: resp,
		// 				size: this.fileSize,
		// 			},
		// 			user,
		// 		);
		// 		this.isUploading = false;
		// 		this.isUploaded = true;
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 	},
		// );

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
}
