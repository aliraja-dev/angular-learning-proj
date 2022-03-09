import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
import { CrudMongodbComponent } from './crud-mongodb/crud-mongodb.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
import { LoginMongodbComponent } from './login-mongodb/login-mongodb.component';
import { PageFourMainComponent } from './page-four-main/page-four-main.component';


const routes: Routes = [
{
  path:'',
  component:PageFourMainComponent,
  children: [
    {path:'', component: CrudFirebaseComponent},
    {path:'login-firebase', component: LoginFirebaseComponent},
    {path:'login-mongodb', component: LoginMongodbComponent},
    {path:'crud-mongodb', component: CrudMongodbComponent},

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFourRoutingModule { }
