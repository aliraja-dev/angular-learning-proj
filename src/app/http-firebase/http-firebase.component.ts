import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-http-firebase',
  templateUrl: './http-firebase.component.html',
  styleUrls: ['./http-firebase.component.css']
})
export class HttpFirebaseComponent implements OnInit, AfterViewInit {
  valueFetched= this.firebaseSvc.valueAsync();
  firebaseData =this.firebaseSvc.getData();

  fetchedData={};
  constructor(private firebaseSvc: FirebaseServiceService) { }

  ngOnInit(): void {
  }

ngAfterViewInit(): void {
  console.log("afterVIewINIT called");
this.firebaseSvc.getData().subscribe(r => {
  this.fetchedData=r;
  console.log(this.fetchedData);});
}

}
