import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';

import { map } from 'rxjs/operators';

interface formData {
  username:{
    username:string,
    email:string
  },
  gender: string,
  hobbies: any[]
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
FIREBASE_URL: string= 'https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/form.json';
  constructor(private http : HttpClient) {
   }

   headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'localhost',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
   });

   storeData(data: formData){
     const jsonData = JSON.stringify(data);
    return this.http.post(this.FIREBASE_URL, jsonData, {headers:this.headers}).pipe(map(
      response => response
    ));
   }

   valueAsync(){
     return this.http.get('https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/db.json');
   }

   getData(){
     return this.http.get(this.FIREBASE_URL)
     .pipe()
     ;
   }
}

