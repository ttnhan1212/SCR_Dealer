import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingPageRoutingModule } from './ongoing-routing.module';

import { OngoingPage } from './ongoing.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		OngoingPageRoutingModule,
		ComponentsModule,
	],
	declarations: [OngoingPage],
})
export class OngoingPageModule {}
