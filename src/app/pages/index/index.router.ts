import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToRequest = () => redirectLoggedInTo(['home/deal']);

const routes: Routes = [
	{
		path: '',
		component: IndexPage,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../welcome/welcome.module').then((m) => m.WelcomePageModule),
			},
			{
				path: 'login',
				loadChildren: () =>
					import('../login/login.module').then((m) => m.LoginPageModule),
			},
			{
				path: 'signup',
				loadChildren: () =>
					import('../signup/signup.module').then((m) => m.SignupPageModule),
			},
		],
		...canActivate(redirectLoggedInToRequest),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexRouter {}
