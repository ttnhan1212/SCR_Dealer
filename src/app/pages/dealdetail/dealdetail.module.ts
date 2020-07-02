import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealdetailPageRoutingModule } from './dealdetail-routing.module';

import { DealdetailPage } from './dealdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealdetailPageRoutingModule
  ],
  declarations: [DealdetailPage]
})
export class DealdetailPageModule {}
