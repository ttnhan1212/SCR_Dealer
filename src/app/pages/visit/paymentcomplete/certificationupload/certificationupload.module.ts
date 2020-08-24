import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { IonicModule } from '@ionic/angular';

import { CertificationuploadPageRoutingModule } from './certificationupload-routing.module';

import { CertificationuploadPage } from './certificationupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDropzoneModule,
    ComponentsModule,
    CertificationuploadPageRoutingModule
  ],
  declarations: [CertificationuploadPage]
})
export class CertificationuploadPageModule {}
