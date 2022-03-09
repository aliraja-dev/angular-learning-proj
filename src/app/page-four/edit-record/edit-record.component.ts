import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../crud-firebase/firebase.service';

import { Task} from '../task.model';
@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  @ViewChild('f', {static:false}) form!: NgForm;
  task:Task;

  constructor(private firebaseSvc: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res);
      this.task =this.firebaseSvc.getTask(res['id']);
      console.log(this.task);
    });
  }

  onUpdate(){

    console.log("update clicked");
    this.firebaseSvc.editTask(this.task.id,{name: this.form.value.taskName, details: this.form.value.taskDetails} ).subscribe(res=>
      {console.log(res)
    this.router.navigate(['page4'])
    });
  }

}
