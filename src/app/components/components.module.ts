import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [SlidesComponent, StartComponent],
	exports: [SlidesComponent, StartComponent],
	imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
