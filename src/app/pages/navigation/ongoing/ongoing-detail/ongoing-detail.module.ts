import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentsModule } from '../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingDetailPageRoutingModule } from './ongoing-detail-routing.module';

import { OngoingDetailPage } from './ongoing-detail.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		OngoingDetailPageRoutingModule,
		ComponentsModule,
		MatExpansionModule,
	],
	declarations: [OngoingDetailPage],
})
export class OngoingDetailPageModule {}
