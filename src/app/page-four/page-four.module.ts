import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourRoutingModule } from './page-four-routing.module';
import { PageFourComponent } from './page-four/page-four.component';
import { IntroRoutingComponent } from './intro-routing/intro-routing.component';
import { RouteAuthComponent } from './route-auth/route-auth.component';


@NgModule({
  declarations: [
    PageFourComponent,
    IntroRoutingComponent,
    RouteAuthComponent
  ],
  imports: [
    CommonModule,
    PageFourRoutingModule
  ]
})
export class PageFourModule { }
