import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroRoutingComponent } from './intro-routing/intro-routing.component';
import { PageFourComponent } from './page-four/page-four.component';
import { RouteAuthComponent } from './route-auth/route-auth.component';

const routes: Routes = [
{
  path:'',
  component:PageFourComponent,
  children: [
    {path:'', component: IntroRoutingComponent},
    {path:'route-auth', component: RouteAuthComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFourRoutingModule { }
