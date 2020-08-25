import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificationuploadPage } from './certificationupload.page';

const routes: Routes = [
  {
    path: '',
    component: CertificationuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificationuploadPageRoutingModule {}
