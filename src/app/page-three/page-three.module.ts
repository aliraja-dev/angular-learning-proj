import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeRoutingModule } from './page-three-routing.module';
import { PageThreeComponent } from './page-three/page-three.component';
import { IntroRxjsComponent } from './intro-rxjs/intro-rxjs.component';
import { IntroPipesComponent } from './intro-pipes/intro-pipes.component';


@NgModule({
  declarations: [
    PageThreeComponent,
    IntroRxjsComponent,
    IntroPipesComponent
  ],
  imports: [
    CommonModule,
    PageThreeRoutingModule
  ]
})
export class PageThreeModule { }
