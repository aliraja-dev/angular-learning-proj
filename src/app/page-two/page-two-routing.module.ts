import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsIntroComponent } from './forms-intro/forms-intro.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component:  FormsIntroComponent},
     {path:'template', component: TemplateFormsComponent},
     {path: 'reactive', component: ReactiveFormsComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule { }
