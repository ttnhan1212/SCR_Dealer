import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentcancelPageRoutingModule } from './paymentcancel-routing.module';

import { PaymentcancelPage } from './paymentcancel.page';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PaymentcancelPageRoutingModule,
		ComponentsModule,
		NgxDropzoneModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		HttpClientModule,
		ReactiveFormsModule,
	],
	declarations: [PaymentcancelPage],
})
export class PaymentcancelPageModule {}
