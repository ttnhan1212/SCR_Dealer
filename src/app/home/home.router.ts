import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
	{
		path: 'home',
		component: HomePage,
		children: [
			{
				path: 'notifications',
				loadChildren: () =>
					import('../pages/notifications/notifications.module').then(
						(m) => m.NotificationsPageModule,
					),
			},
			{
				path: 'settings',
				loadChildren: () =>
					import('../pages/setting/setting.module').then(
						(m) => m.SettingPageModule,
					),
			},
			{
				path: 'deal',
				loadChildren: () =>
					import('../pages/deal/deal.module').then((m) => m.DealPageModule),
			},
			{
				path: 'ongoing',
				loadChildren: () =>
					import('../pages/ongoing/ongoing.module').then(
						(m) => m.OngoingPageModule,
					),
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRouter {}
