import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentcomplete',
  templateUrl: './paymentcomplete.page.html',
  styleUrls: ['./paymentcomplete.page.scss'],
})
export class PaymentcompletePage implements OnInit {
  now: string = new Date().toISOString();
  selectDate: Date;
  
  constructor() { }

  ngOnInit() {
  }

}