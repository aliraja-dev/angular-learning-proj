import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './create-record/create-record.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
import { CrudMongodbComponent } from './crud-mongodb/crud-mongodb.component';
import { DataTableComponent } from './data-table/data-table.component';
import { EditRecordComponent } from './edit-record/edit-record.component';

import { PageFourMainComponent } from './page-four-main/page-four-main.component';


const routes: Routes = [
{
  path:'',
  component:PageFourMainComponent,
  children: [
    {path:'', component: CrudFirebaseComponent,
    children:[
      {path:'', component: DataTableComponent}, // default path
      {path:'edit/:id', component:EditRecordComponent},
      {path:'create', component:CreateRecordComponent}
    ]
  },
    {path:'crud-mongodb', component: CrudMongodbComponent,
    children:[
      {path:'', component: DataTableComponent}, // default path
      {path:'edit/:id', component:EditRecordComponent},
      {path:'create', component:CreateRecordComponent}
    ]
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFourRoutingModule { }
