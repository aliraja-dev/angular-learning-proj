import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit, OnDestroy {
 receiveFromAnotherComponent: string='';
 subjectSub: Subscription;
  constructor(private subSvc: SubjectService) { }

  ngOnInit(): void {
    this.subjectSub = this.subSvc.updateStatus.subscribe(

      data => this.receiveFromAnotherComponent=data

    );
  }









  ngOnDestroy(): void {
      this.subjectSub.unsubscribe();
  }
}
