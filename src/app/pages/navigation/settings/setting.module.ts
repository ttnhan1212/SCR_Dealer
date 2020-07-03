import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SettingPageRoutingModule,
		MatExpansionModule,
	],
	declarations: [SettingPage],
})
export class SettingPageModule {}
