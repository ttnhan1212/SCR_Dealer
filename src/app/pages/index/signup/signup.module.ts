import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { PrivatepolicyPage } from './../modals/privatepolicy/privatepolicy.page';
import { TermconditionPage } from './../modals/termcondition/termcondition.page';
import { PuagreementPage } from './../modals/puagreement/puagreement.page';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		SignupPageRoutingModule,
		MatExpansionModule,
		MatCheckboxModule,
		DragDropModule,
		MatTableModule,
		MatIconModule,
		MatRadioModule,
		MatDialogModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
		HttpClientModule,
		MatFormFieldModule,
		MatInputModule,
	],
	declarations: [
		SignupPage,
		PrivatepolicyPage,
		TermconditionPage,
		PuagreementPage,
	],
	entryComponents: [PrivatepolicyPage, TermconditionPage, PuagreementPage],
})
export class SignupPageModule {}
