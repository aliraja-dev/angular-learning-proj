import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSixRoutingModule } from './page-six-routing.module';
import { PageSixComponent } from './page-six/page-six.component';
import { MiscComponent } from './misc/misc.component';


@NgModule({
  declarations: [
    PageSixComponent,
    MiscComponent
  ],
  imports: [
    CommonModule,
    PageSixRoutingModule
  ]
})
export class PageSixModule { }
