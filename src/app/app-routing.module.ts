import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpFirebaseComponent } from "./http-firebase/http-firebase.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

import { TemplateFormComponent } from "./template-form/template-form.component";

const routes: Routes = [

  {
    path:'', redirectTo: '/reactive', pathMatch:'full'
  },
  {path: '/home', loadChildren:()=> import('./home/home.module').then(mod=> mod.HomeModule)},
  {
    path: 'template', component: TemplateFormComponent
  },
  {path: 'reactive', component: ReactiveFormsComponent},
  {path: 'firebase', component: HttpFirebaseComponent}
]

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports:[RouterModule]
})

export class AppRoutingModule {

}
