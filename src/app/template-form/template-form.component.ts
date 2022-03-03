import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  title = 'Angular-learning-project';
  defaultSecretQs : string = "teacher";
  qsAnswer:string = "";
  genders: string[]= ['male', 'female', 'binary'];
  @ViewChild('f', {static:false}) form!: NgForm;
  formSubmitted: boolean=false;
    user ={
      gender:"",
      username:"",
      email:"",
      secret:'',
      answer:''
    }
  // onSubmit(form:NgForm){
  //   console.log( form);
  // }
  onSubmit(){
    console.log(this.form.value);
    this.formSubmitted=true;
    this.user.gender= this.form.value.gender;
    this.user.username= this.form.value.userData.username;
    this.user.email= this.form.value.userData.email;
    this.user.secret= this.form.value.secretQs.secret;
    this.user.answer= this.form.value.secretQs.answer
    this.form.reset();
  }


  onSuggestUserName(){
    this.form.form.patchValue({
      userData:{
        username:"SuperUser"
      }
    });
  }
}
