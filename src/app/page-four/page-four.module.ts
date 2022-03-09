import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourRoutingModule } from './page-four-routing.module';

import { PageFourMainComponent } from './page-four-main/page-four-main.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
import { LoginMongodbComponent } from './login-mongodb/login-mongodb.component';
import { CrudMongodbComponent } from './crud-mongodb/crud-mongodb.component';


@NgModule({
  declarations: [
    PageFourMainComponent,
    CrudFirebaseComponent,
    LoginFirebaseComponent,
    LoginMongodbComponent,
    CrudMongodbComponent
  ],
  imports: [
    CommonModule,
    PageFourRoutingModule
  ]
})
export class PageFourModule { }
