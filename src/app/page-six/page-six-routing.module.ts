import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';

import { PageSixMainComponent } from './page-six-main/page-six-main.component';
import { RegisterFirebaseComponent } from './register-firebase/register-firebase.component';



const routes: Routes = [
  {
    path: '',
    component: PageSixMainComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component:  LoginFirebaseComponent},
      { path: 'register', component:  RegisterFirebaseComponent},


    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSixRoutingModule { }
