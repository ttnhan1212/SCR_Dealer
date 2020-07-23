import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealdetailPageRoutingModule } from './dealdetail-routing.module';

import { DealdetailPage } from './dealdetail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		DealdetailPageRoutingModule,
		MatExpansionModule,
	],
	declarations: [DealdetailPage],
})
export class DealdetailPageModule {}
