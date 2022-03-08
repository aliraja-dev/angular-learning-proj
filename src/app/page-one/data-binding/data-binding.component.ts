import { Component, OnInit } from '@angular/core';

import { Account } from './account.model';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  accounts: Account[]=[];

  constructor(private accountsSvc: AccountsService) { }

  ngOnInit(): void {
    // call service here to initialize the accounts array
    this.accounts= this.accountsSvc.accounts;
  }

}
