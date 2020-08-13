import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentcancelPageRoutingModule } from './paymentcancel-routing.module';

import { PaymentcancelPage } from './paymentcancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentcancelPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaymentcancelPage]
})
export class PaymentcancelPageModule {}
