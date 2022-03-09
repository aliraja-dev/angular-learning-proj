import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Task } from "../task.model";
@Injectable({providedIn:'root'})
export class FirebaseService {
  tasks:Task[]=[];

  tasksSubject = new Subject<Task[]>();

  constructor(private http: HttpClient){}

// Firebase CRUD methods will come here

postData(task:Task){
  console.log(task);
  return this.http.post('https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/tasks.json', task);
}

fetchData(){
  return this.http.get<{ [key: string]: Task }>('https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/tasks.json').pipe(
    map(responseData => {
      const tasksArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          tasksArray.push({ ...responseData[key], id: key });
        }
      }
      this.tasks=tasksArray;
      this.tasksSubject.next(tasksArray);
      return tasksArray;
    }),
    catchError(errorRes => {
      // Send to analytics server
      return throwError(errorRes);
    })
  );;}


deleteTask(id:string){
  return this.http.delete('https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/tasks/' + id +'.json');
}


editTask(id:string, data:any){
  return this.http.put('https://angular-learning-project-ac62c-default-rtdb.firebaseio.com/tasks/' + id +'.json', data);
}

getTask(id:string){
  const task = this.tasks.find(
    (task) => {
      return task.id === id;
    }
  );
  return task;
}

}
