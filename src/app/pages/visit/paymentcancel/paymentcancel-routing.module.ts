import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentcancelPage } from './paymentcancel.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentcancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentcancelPageRoutingModule {}
