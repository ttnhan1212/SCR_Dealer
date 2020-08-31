import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentcompletePageRoutingModule } from './paymentcomplete-routing.module';

import { PaymentcompletePage } from './paymentcomplete.page';

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
		PaymentcompletePageRoutingModule,
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
		MatFormFieldModule,
		MatInputModule,
	],
	declarations: [PaymentcompletePage],
})
export class PaymentcompletePageModule {}
