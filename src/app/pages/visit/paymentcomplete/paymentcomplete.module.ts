import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentcompletePageRoutingModule } from './paymentcomplete-routing.module';

import { PaymentcompletePage } from './paymentcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentcompletePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaymentcompletePage]
})
export class PaymentcompletePageModule {}
