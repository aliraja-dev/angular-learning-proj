import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

import { TemplateFormComponent } from "./template-form/template-form.component";

const routes: Routes = [
  {
    path:'', redirectTo: '/reactive', pathMatch:'full'
  },
  {
    path: 'template', component: TemplateFormComponent
  },
  {path: 'reactive', component: ReactiveFormsComponent}
]

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports:[RouterModule]
})

export class AppRoutingModule {

}
