import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subSvc: SubjectService) { }

  ngOnInit(): void {
  }


  emitData(data:string){
    this.subSvc.updateStatus.next(data);
  }

}
