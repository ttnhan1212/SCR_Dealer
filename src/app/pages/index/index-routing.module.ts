import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToRequest = () => redirectLoggedInTo(['home', 'deal']);

const routes: Routes = [
	{
		path: '',
		component: IndexPage,
		children: [
			{
				path: 'login',
				loadChildren: () =>
					import('./login/login.module').then((m) => m.LoginPageModule),
			},
			{
				path: 'signup',
				loadChildren: () =>
					import('./signup/signup.module').then((m) => m.SignupPageModule),
			},
			{
				path: 'privatepolicy',
				loadChildren: () =>
					import('./modals/privatepolicy/privatepolicy.module').then(
						(m) => m.PrivatepolicyPageModule
					),
			},
			{
				path: 'termcondition',
				loadChildren: () =>
					import('./modals/termcondition/termcondition.module').then(
						(m) => m.TermconditionPageModule
					),
			},
			{
				path: 'puagreement',
				loadChildren: () =>
					import('./modals/puagreement/puagreement.module').then(
						(m) => m.PuagreementPageModule
					),
			},
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full',
			},
		],
		...canActivate(redirectLoggedInToRequest),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexRoutingModule {}
