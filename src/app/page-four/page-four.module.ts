import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourRoutingModule } from './page-four-routing.module';

import { PageFourMainComponent } from './page-four-main/page-four-main.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';

import { CrudMongodbComponent } from './crud-mongodb/crud-mongodb.component';
import { DataTableComponent } from './data-table/data-table.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { CreateRecordComponent } from './create-record/create-record.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageFourMainComponent,
    CrudFirebaseComponent,

    CrudMongodbComponent,
    DataTableComponent,
    EditRecordComponent,
    CreateRecordComponent
  ],
  imports: [
    CommonModule,
    PageFourRoutingModule,
    FormsModule
  ]
})
export class PageFourModule { }
