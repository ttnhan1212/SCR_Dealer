import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentcompletePage } from './paymentcomplete.page';

const routes: Routes = [
	{
		path: '',
		component: PaymentcompletePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PaymentcompletePageRoutingModule {}
