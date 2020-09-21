import { DealdetailPage } from './pages/dealdetail/dealdetail.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorsPage } from './pages/errors/errors.page';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/index/index.module').then((m) => m.IndexPageModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/navigation/navigation.module').then(
				(m) => m.NavigationPageModule
			),
	},
	{
		path: 'home/deal/:id',
		component: DealdetailPage,
		loadChildren: () =>
			import('./pages/dealdetail/dealdetail.module').then(
				(m) => m.DealdetailPageModule
			),
	},
	{
		path: 'home/ongoing/:id',
		loadChildren: () =>
			import(
				'./pages/navigation/ongoing/ongoing-detail/ongoing-detail.module'
			).then((m) => m.OngoingDetailPageModule),
	},
	{
		path: 'home/ongoing/cancel/:id',
		loadChildren: () =>
			import('./pages/navigation/ongoing/cancel/cancel.module').then(
				(m) => m.CancelPageModule
			),
	},
	{
		path: 'home/settings/:id',
		loadChildren: () =>
			import('./pages/navigation/settings/user-detail/user-detail.module').then(
				(m) => m.UserDetailPageModule
			),
	},
	{
		path: 'home/visit/result/revisit/:id',
		loadChildren: () =>
			import('./pages/visit/revisit/revisit.module').then(
				(m) => m.RevisitPageModule
			),
	},
	{
		path: 'home/visit/result/paymentcomplete/:id',
		loadChildren: () =>
			import('./pages/visit/paymentcomplete/paymentcomplete.module').then(
				(m) => m.PaymentcompletePageModule
			),
	},
	{
		path: 'certificationupload/:id',
		loadChildren: () =>
			import(
				'./pages/visit/paymentcomplete/certificationupload/certificationupload.module'
			).then((m) => m.CertificationuploadPageModule),
	},
	{
		path: 'home/visit/result/paymentcancel/:id',
		loadChildren: () =>
			import('./pages/visit/paymentcancel/paymentcancel.module').then(
				(m) => m.PaymentcancelPageModule
			),
	},
	{
		path: 'home/visit/:id',
		loadChildren: () =>
			import('./pages/visit/visit.module').then((m) => m.VisitPageModule),
	},
	{
		path: 'home/visit/result/:id',
		loadChildren: () =>
			import('./pages/visit/result/result.module').then(
				(m) => m.ResultPageModule
			),
	},
	{
		path: 'home/payment/:id',
		loadChildren: () =>
			import('./pages/visit/payment/payment.module').then(
				(m) => m.PaymentPageModule
			),
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{ path: '**', component: ErrorsPage },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
