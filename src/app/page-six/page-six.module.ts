import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSixRoutingModule } from './page-six-routing.module';

import { PageSixMainComponent } from './page-six-main/page-six-main.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
import { RegisterFirebaseComponent } from './register-firebase/register-firebase.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [

    LoadingSpinnerComponent,
    PageSixMainComponent,
    LoginFirebaseComponent,
    RegisterFirebaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PageSixRoutingModule
  ]
})
export class PageSixModule { }
