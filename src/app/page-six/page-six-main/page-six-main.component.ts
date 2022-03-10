import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-page-six-main',
  templateUrl: './page-six-main.component.html',
  styleUrls: ['./page-six-main.component.css']
})
export class PageSixMainComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  isAuthenticated=false;
  email='';

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
     if(this.isAuthenticated){
      this.email = user.email;
     }
      console.log(!user);
      console.log(!!user);
    });
  }
ngOnDestroy(): void {
    this.userSub.unsubscribe();
}

onLogout(){
  this.authService.logout();
}
}
