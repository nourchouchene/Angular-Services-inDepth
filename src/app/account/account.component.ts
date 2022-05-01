import { Component, Input } from '@angular/core';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor( private UpdateAccountService : AccountService ) {

    
  }
  onSetTo(status: string) {
    
    this.UpdateAccountService.UpdateStatus(this.id, status) ; 
    // console.log('A server status changed, new status: ' + status);
    this.UpdateAccountService.StatusAlert.emit(status) ; 

  }
}
