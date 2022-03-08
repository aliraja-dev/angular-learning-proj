import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output('fromChild1') textToParent = new EventEmitter<string>();
  @ViewChild('child1Input', {static:false}) inputField1: ElementRef<HTMLInputElement> = {} as ElementRef;

  @Input('toChild') fromParent :string = '';
  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(){
    this.textToParent.emit(this.inputField1.nativeElement.value);
  }
}
