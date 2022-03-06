import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPipesComponent } from './intro-pipes/intro-pipes.component';
import { IntroRxjsComponent } from './intro-rxjs/intro-rxjs.component';
import { ObservablesComponent } from './observables/observables.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path:"", component:PageThreeComponent,
  children:[
    {
      path:'', component: IntroRxjsComponent
    },
    {
      path: 'rxjs', component: RxjsComponent
    },
    {
      path: 'observables', component: ObservablesComponent
    },
    {
      path: 'subjects', component: SubjectsComponent
    },
    {
      path: 'pipes', component: IntroPipesComponent
    }
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageThreeRoutingModule { }
