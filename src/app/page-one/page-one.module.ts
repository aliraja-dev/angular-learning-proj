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
import { Child1Component } from './basics/child1/child1.component';
import { AccountComponent } from './data-binding/account/account.component';
import { NewAccountComponent } from './data-binding/new-account/new-account.component';
import { AccountsService } from './data-binding/accounts.service';
import { LoggingService } from './data-binding/logging.service';
import { SubjectsComponent } from './event-binding/subjects/subjects.component';
import { SubjectService } from './event-binding/subject.service';
import { FilterPipe } from './directives/filter.pipe';


@NgModule({
  declarations: [
    PageOneComponent,
    BasicsComponent,
    DataBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    ServicesComponent,
    Child1Component,
    AccountComponent,
    NewAccountComponent,
    SubjectsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    FormsModule
  ],
  providers:[AccountsService, LoggingService, SubjectService]
})
export class PageOneModule { }
