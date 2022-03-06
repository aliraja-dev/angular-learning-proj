import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  stringInterpol:string ='Event Binding';
  propBind:boolean=true;
  addRemoveElement:boolean=true;

  textArea:string='This text is two way bind with text area above, change to see it in action using ngModel of the forms Module';


  constructor() { }

  ngOnInit(): void {
  }

  onChangeTitle(event:PointerEvent): void{
    this.stringInterpol="String Interpolation";
    console.log(event);
  }

  onChangeColorText(event:PointerEvent): void{
    this.propBind=!this.propBind;
    console.log(event);
  }

  onAddRemove(){
    this.addRemoveElement=!this.addRemoveElement;
  }
}
