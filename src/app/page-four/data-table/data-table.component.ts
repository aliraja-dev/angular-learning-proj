import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../crud-firebase/firebase.service';

import { Task } from "../task.model";
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
records: Task[]=[];
  constructor(private firebaseSvc: FirebaseService, private router:Router) { }

  ngOnInit(): void {
    if(this.router.url ==='/page4/crud-mongodb'){
      console.log('this request will go to Mongo to fetch data');
      this.firebaseSvc.getDataFromMongoDb().subscribe( (data)=>{console.log(data);
        this.firebaseSvc.tasksSubject.next(data);
      })
      this.firebaseSvc.tasksSubject.subscribe(data=> this.records=data)
        return;
    }
    this.firebaseSvc.fetchData().subscribe(res=>{
      this.firebaseSvc.tasksSubject.next(res);
      console.log(res)
    });
    this.firebaseSvc.tasksSubject.subscribe(data=> this.records=data)
  }

  onDelete(id:string){
    console.log('delete clicked');
    if(confirm("Are you sure to delete ")) {
      if(this.router.url ==='/page4/crud-mongodb'){
        console.log(id)
        this.firebaseSvc.deleteTaskfromMongoDb(id).subscribe(res=> {
          this.records = this.records.filter((task)=>{
            return task.id !== id
          });
          this.firebaseSvc.tasksSubject.next(this.records);
          console.log(res)});
          return;
      }
// the below code is for firebase delete
      console.log("true");
      this.firebaseSvc.deleteTask(id).subscribe(res=> {
        this.records = this.records.filter((task)=>{
          return task.id !== id
        });
        this.firebaseSvc.tasksSubject.next(this.records);
        console.log(res)}
        );
    }
  }
}
