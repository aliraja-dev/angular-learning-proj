import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiscComponent } from './misc/misc.component';
import { PageSixComponent } from './page-six/page-six.component';


const routes: Routes = [
  {
    path: '',
    component: PageSixComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component:  MiscComponent},


    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSixRoutingModule { }
