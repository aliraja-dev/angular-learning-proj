import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {  AuthService } from '../auth.service';

@Component({
  selector: 'app-login-firebase',
  templateUrl: './login-firebase.component.html',
  styleUrls: ['./login-firebase.component.css']
})
export class LoginFirebaseComponent {
  signedIn='';
  isLoading = false;
  error:string = '';

  constructor(private authService: AuthService, private router: Router) {}


  onSubmit(form: NgForm) {
    console.log("submit clicked", form.value);
    // if (!form.valid) {
    //   return;
    // }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.login(email, password).subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.signedIn=`You have successfully  signed in as ${resData.email}`;
        // this.router.navigate(['']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
