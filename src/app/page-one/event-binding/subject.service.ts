import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SubjectService{
updateStatus = new Subject<string>();
}
