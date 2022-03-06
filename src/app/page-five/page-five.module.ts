import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFiveRoutingModule } from './page-five-routing.module';
import { PageFiveComponent } from './page-five/page-five.component';
import { HttpIntoComponent } from './http-into/http-into.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { HttpFirebaseIntroComponent } from './http-firebase-intro/http-firebase-intro.component';


@NgModule({
  declarations: [
    PageFiveComponent,
    HttpIntoComponent,
    FirebaseComponent,
    HttpFirebaseIntroComponent
  ],
  imports: [
    CommonModule,
    PageFiveRoutingModule
  ]
})
export class PageFiveModule { }
