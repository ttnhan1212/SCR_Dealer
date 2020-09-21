import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitPage } from './visit.page';

const routes: Routes = [
	{
		path: '',
		component: VisitPage,
	},
  // {
  //   path: 'payment',
  //   loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  // },

	// {
	// 	path: 'result',
	// 	loadChildren: () =>
	// 		import('./result/result.module').then((m) => m.ResultPageModule),
	// },
	// {
	// 	path: 'home/revisit',
	// 	loadChildren: () =>
	// 		import('./revisit/revisit.module').then((m) => m.RevisitPageModule),
	// },
	// {
	// 	path: 'paymentcomplete',
	// 	loadChildren: () =>
	// 		import('./paymentcomplete/paymentcomplete.module').then(
	// 			(m) => m.PaymentcompletePageModule,
	// 		),
	// },
	// {
	// 	path: 'paymentcancel',
	// 	loadChildren: () =>
	// 		import('./paymentcancel/paymentcancel.module').then(
	// 			(m) => m.PaymentcancelPageModule,
	// 		),
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VisitPageRoutingModule {}
