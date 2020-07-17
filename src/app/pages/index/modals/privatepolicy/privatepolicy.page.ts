import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-privatepolicy',
  templateUrl: './privatepolicy.page.html',
  styleUrls: ['./privatepolicy.page.scss'],
})
export class PrivatepolicyPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closePrivatePolicyModal() {
    await this.modalController.dismiss();
  }
}
