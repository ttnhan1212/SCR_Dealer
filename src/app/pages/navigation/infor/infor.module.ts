import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InforPageRoutingModule } from './infor-routing.module';

import { InforPage } from './infor.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		InforPageRoutingModule,
		MatExpansionModule,
	],
	declarations: [InforPage],
})
export class InforPageModule {}
