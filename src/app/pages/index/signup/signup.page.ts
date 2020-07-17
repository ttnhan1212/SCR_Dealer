import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

import { ModalController} from '@ionic/angular';
import { PrivatepolicyPage } from './../modals/privatepolicy/privatepolicy.page';
import { PuagreementPage } from './../modals/puagreement/puagreement.page';
import { TermconditionPage } from './../modals/termcondition/termcondition.page';

const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png'
@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	email: string;
	password: string;
	cPassword: string;
	imageSource: File;
	imagePreview: string = IMG_AVT_DEFAULT;
	checkBoxList: any;
	isIndeterminate:boolean;
  masterCheck:boolean;

	constructor(
		public afAuth: AngularFireAuth,
		private router: Router,
		public loadingController: LoadingController,
		private toast: ToastService,
		private modalController: ModalController,
		private el: ElementRef
	) { 
		this.checkBoxList = [
      {
				id: 1,
        value:"Private Policy",
        isChecked:false
      },{
				id: 2,
        value:"Terms & Condition",
        isChecked:false
      },{
				id: 3,
        value:"Privacy Usage Agreement",
        isChecked:false
      },
    ];
	}

	handleFileInput(files: File[]) {
		this.imageSource = files[0];
		let reader = new FileReader();
		reader.readAsDataURL(files[0]); 
		reader.onload = (e: any) => {
			this.imagePreview = e.target.result || IMG_AVT_DEFAULT;
		}
	}


	ngOnInit() { }

	async privatePolicyModal() {
		const modal = await this.modalController.create({
			component: PrivatepolicyPage
		});
		return await modal.present();
	}

	async termConditionModal() {
		const modal = await this.modalController.create({
			component: TermconditionPage
		});
		return await modal.present();
	}

	async PuaModal() {
		const modal = await this.modalController.create({
			component: PuagreementPage
		});
		return await modal.present();
	}

	checkMaster() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map(obj => {
			if (obj.isChecked) checked++;
			//console.log(checked);
			console.log(obj.isChecked);
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
		console.log("Checkbox Id: ", checkboxId);
		
		if (checkboxId == 1) {
			this.privatePolicyModal();
		} else {
			if (checkboxId == 2) {
				this.termConditionModal();
			} else if (checkboxId == 3) {
					this.PuaModal();
			}
		}
	}

	async signup() {
		const { email, password } = this;
		if (this.password !== this.cPassword) {
			this.toast.showToast('Password not match, Please try again!');
		} else {
			const loading = await this.loadingController.create({
				message: 'Please wait...',
				showBackdrop: true,
			});
			try {
				await loading.present();
				await this.afAuth.createUserWithEmailAndPassword(email, password);
				this.toast.showToast('Your account have been created, Please login!');
				this.router.navigate(['login']);
				await loading.dismiss();
				return true;
			} catch (error) {
				this.toast.showToast(error.message);
				await loading.dismiss();
				return false;
			}
		}
	}
}
