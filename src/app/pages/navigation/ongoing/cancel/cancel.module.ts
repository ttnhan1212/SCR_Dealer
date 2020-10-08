import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelPageRoutingModule } from './cancel-routing.module';

import { CancelPage } from './cancel.page';
import { HttpLoaderFactory } from 'src/app/pages/index/login/login.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CancelPageRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		})],
	declarations: [CancelPage],
})
export class CancelPageModule {}
