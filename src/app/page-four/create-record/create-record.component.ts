import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../crud-firebase/firebase.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  constructor(private firebaseSvc: FirebaseService, private router:Router, private route: ActivatedRoute) { }

  task: Task;

  ngOnInit(): void {
    console.log(this.route);
  }

  onAddTask(value:any){
    if(this.router.url ==='/page4/crud-mongodb/create'){
      console.log('this request will go to Mongo thru Express server');
      this.firebaseSvc.addTaskToMongoDb({name:value.name, details: value.details}).subscribe( (res)=>{console.log(res)
        this.router.navigate(['/page4', 'crud-mongodb']);})
        return;
    }
    // console.log(this.route);
    // console.log(window.location.href);
    // console.log(value);
    // console.log('add task clicked')
  this.firebaseSvc.postData({name: value.name, details: value.details }).subscribe(
    (res)=>{console.log(res)
    this.router.navigate(['/page4']);
    });
  }

}
