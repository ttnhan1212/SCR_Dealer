import { NavigationPage } from './navigation.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
	{
		path: '',
		component: NavigationPage,
		children: [
			{
				path: 'deal',
				loadChildren: () =>
					import('./deal/deal.module').then((m) => m.DealPageModule),
			},
			{
				path: 'notifications',
				loadChildren: () =>
					import('./notifications/notifications.module').then(
						(m) => m.NotificationsPageModule,
					),
			},
			{
				path: 'settings',
				loadChildren: () =>
					import('./settings/setting.module').then((m) => m.SettingPageModule),
			},
			{
				path: 'infor',
				loadChildren: () =>
					import('./infor/infor.module').then((m) => m.InforPageModule),
			},
			{
				path: 'ongoing',
				loadChildren: () =>
					import('./ongoing/ongoing.module').then((m) => m.OngoingPageModule),
			},
			{
				path: '',
				redirectTo: 'deal',
				pathMatch: 'full',
			},
		],
		...canActivate(redirectUnauthorizedToLogin),
	},
	{
		path: 'ongoing-detail',
		loadChildren: () =>
			import('../ongoing-detail/ongoing-detail.module').then(
				(m) => m.OngoingDetailPageModule,
			),
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NavigationRoutingModule {}
