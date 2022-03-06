import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PageOneComponent } from './page-one/page-one.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component:  BasicsComponent},
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'services', component: ServicesComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageOneRoutingModule { }
