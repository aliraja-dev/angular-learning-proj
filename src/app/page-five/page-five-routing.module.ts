import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';
import { HttpFirebaseIntroComponent } from './http-firebase-intro/http-firebase-intro.component';
import { HttpIntoComponent } from './http-into/http-into.component';
import { PageFiveComponent } from './page-five/page-five.component';

const routes: Routes = [
{path:'', component:PageFiveComponent,
children: [
  {path:'', component: HttpFirebaseIntroComponent},
  {path:'http', component: HttpIntoComponent},
  {path:'firebase', component: FirebaseComponent},

]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFiveRoutingModule { }
