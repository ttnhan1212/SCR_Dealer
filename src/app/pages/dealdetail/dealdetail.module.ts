import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealdetailPageRoutingModule } from './dealdetail-routing.module';

import { DealdetailPage } from './dealdetail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		DealdetailPageRoutingModule,
		MatExpansionModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			}
		}),
		HttpClientModule
	],
	declarations: [DealdetailPage],
})
export class DealdetailPageModule {}
