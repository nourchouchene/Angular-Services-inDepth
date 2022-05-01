import { Component } from '@angular/core';
import { AccountService } from '../Account.service';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService ]
})
export class NewAccountComponent {

  constructor(  private LogService : LoggingService ,
    private AddAccountService : AccountService) {
      this.AddAccountService.StatusAlert.subscribe(
        (status:string ) => alert (
  'New Status' + status 
      )
      ) ;
  
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   
    this.AddAccountService.AddAccount(accountName,accountStatus) ; 
    // this.LogService.LogConsole(accountStatus) ; 
    
}
}

