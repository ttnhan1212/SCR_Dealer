import { ComponentsModule } from 'src/app/components/components.module';
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
    RevisitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RevisitPage]
})
export class RevisitPageModule {}
