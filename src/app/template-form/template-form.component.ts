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
  @ViewChild('f') form: NgForm;
  formSubmitted: boolean=false;
  userData={
    gender:"",
    userData:{
      username:"",
      email:""
    },
    secretQs:{
      secret:'',
      answer:''
    }

  }
  // onSubmit(form:NgForm){
  //   console.log( form);
  // }
  onSubmit(){
    console.log(this.form);
    this.formSubmitted=true;
    this.userData.gender= this.form.value.gender;
    this.userData.userData.username= this.form.value.userData.username;
    this.userData.userData.email= this.form.value.userData.email;
    this.userData.secretQs.secret= this.form.value.secretQs.secret;
    this.userData.secretQs.answer= this.form.value.secretQs.answer
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
