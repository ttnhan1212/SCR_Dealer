import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorsPageRoutingModule } from './errors-routing.module';

import { ErrorsPage } from './errors.page';
import { HttpLoaderFactory } from '../index/login/login.module';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ErrorsPageRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			}
		})],
	declarations: [ErrorsPage],
})
export class ErrorsPageModule {}
