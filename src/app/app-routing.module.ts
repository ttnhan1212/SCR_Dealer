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
				(m) => m.NavigationPageModule,
			),
	},
	{
		path: 'home/deal/:id',
		component: DealdetailPage,
		loadChildren: () =>
			import('./pages/dealdetail/dealdetail.module').then(
				(m) => m.DealdetailPageModule,
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
				(m) => m.CancelPageModule,
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
