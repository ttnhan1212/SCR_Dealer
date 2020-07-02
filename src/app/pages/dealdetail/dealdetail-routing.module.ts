import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealdetailPage } from './dealdetail.page';

const routes: Routes = [
  {
    path: '',
    component: DealdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealdetailPageRoutingModule {}
