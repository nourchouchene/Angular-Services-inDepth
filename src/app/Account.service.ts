import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {

   accounts : {name : string , status : string } [] = [
       
    {
       name : ' Test1' ,
       status : 'Hidden'
    },

    {
        name : ' Test2' ,
        status : 'Inacive'
    },

    {
        name : ' Test3' ,
        status : 'Hidden'
    }
 
 

];

StatusAlert = new EventEmitter<string>() ;

constructor( private LogService : LoggingService) {

}
      AddAccount( name: string , status : string ){

        this.accounts.push({name : name, status : status }) ; 
        this.LogService.LogConsole(status) ;

      }
    
       UpdateStatus(id: number, newStatus: string ){
           this.accounts[id].status = newStatus ; 
           this.LogService.LogConsole(newStatus) ;
   }


} 