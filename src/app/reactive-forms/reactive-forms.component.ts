import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders: string[]=['male','female', 'binary'];
  forbiddenUserNames = ['admin', 'CocaCola', 'USA'];
  emailTaken = ['abc@abc'];
  constructor() { }

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null, [Validators.required,
          this.customValidator.bind(this)
        ]
          ),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ],
        this.forbiddenEmails
        ),
      }),
      'gender': new FormControl('binary'),
      'hobbies': new FormArray([]),
    })

    this.signUpForm.statusChanges.subscribe((v)=>{console.log(v)});
    this.signUpForm.valueChanges.subscribe((v)=>{console.log(v)})
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  customValidator(control: FormControl): {[s:string]:boolean} | null{
  if( this.forbiddenUserNames.indexOf(control.value) !== -1 ){
  return {'invalid input': true};
  }
    return null;
  }

  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
