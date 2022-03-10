import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-firebase',
  templateUrl: './register-firebase.component.html',
  styleUrls: ['./register-firebase.component.css']
})
export class RegisterFirebaseComponent implements OnInit {
  isLoading = false;
  error: string = null;
  signedIn:string = '';
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log("submit clicked", form.value)
    // if (!form.valid) {
    //   return;
    // }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.authService.signup(email, password).subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.signedIn=`You have successfully  signed up as ${resData.email}`;

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
