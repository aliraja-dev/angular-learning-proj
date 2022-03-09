import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../crud-firebase/firebase.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  constructor(private firebaseSvc: FirebaseService, private router:Router) { }

  task: Task;

  ngOnInit(): void {
  }

  onAddTask(value:any){
    console.log(value);
    console.log('add task clicked')
  this.firebaseSvc.postData({name: value.name, details: value.details }).subscribe(

    (res)=>{console.log(res)
    this.router.navigate(['/page4']);
    });
  }

}
