import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: NavigationComponent,
		children: [
			{
				path: 'deal',
				loadChildren: () =>
					import('./deal/deal.module').then((m) => m.DealPageModule),
			},
			{
				path: 'details',
				loadChildren: () =>
					import('../navigation/dealdetail/dealdetail.module').then(
						(m) => m.DealdetailPageModule,
					),
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
				path: 'ongoing',
				loadChildren: () =>
					import('./ongoing/ongoing.module').then((m) => m.OngoingPageModule),
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NavigationRouter {}
