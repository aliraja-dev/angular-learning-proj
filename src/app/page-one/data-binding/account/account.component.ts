import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  msgAlert:string='';

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.msgAlert=`The ${this.account.name} has changed to ${status}`;

    this.accountsService.updateStatus(this.id, status);

    this.accountsService.statusUpdated.emit(this.msgAlert);
  }
}
