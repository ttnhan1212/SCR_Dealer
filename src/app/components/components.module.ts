import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

@NgModule({
	declarations: [StartComponent, LogoComponent],
	exports: [StartComponent, LogoComponent],
	imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
