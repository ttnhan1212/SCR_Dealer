import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationPage } from './navigation.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [NavigationPage],
	imports: [CommonModule, FormsModule, IonicModule, NavigationRoutingModule],
})
export class NavigationPageModule {}
