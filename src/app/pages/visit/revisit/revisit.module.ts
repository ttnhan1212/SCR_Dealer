import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisitPageRoutingModule } from './revisit-routing.module';

import { RevisitPage } from './revisit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisitPageRoutingModule
  ],
  declarations: [RevisitPage]
})
export class RevisitPageModule {}
