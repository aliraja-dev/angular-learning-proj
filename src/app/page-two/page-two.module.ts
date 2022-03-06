import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PageTwoRoutingModule } from './page-two-routing.module';


import { PageTwoComponent } from './page-two/page-two.component';
import { FormsIntroComponent } from './forms-intro/forms-intro.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


@NgModule({
  declarations: [
    PageTwoComponent,
    FormsIntroComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent
  ],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PageTwoModule { }
