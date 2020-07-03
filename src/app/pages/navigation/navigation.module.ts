import { NavigationComponent } from './navigation.component';
import { NavigationRouter } from './navigation.router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, FormsModule, IonicModule, NavigationRouter],
})
export class NavigationModule {}
