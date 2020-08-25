import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { IonicModule } from '@ionic/angular';

import { CertificationuploadPageRoutingModule } from './certificationupload-routing.module';

import { CertificationuploadPage } from './certificationupload.page';

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
    NgxDropzoneModule,
    ComponentsModule,
    CertificationuploadPageRoutingModule,
    TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			}
		}),
		HttpClientModule
  ],
  declarations: [CertificationuploadPage]
})
export class CertificationuploadPageModule {}
