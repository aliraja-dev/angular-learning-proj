import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { BasicsComponent } from './basics/basics.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageOneComponent,
    BasicsComponent,
    DataBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    FormsModule
  ]
})
export class PageOneModule { }
