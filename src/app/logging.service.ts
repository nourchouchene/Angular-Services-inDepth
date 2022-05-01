
// Imports 

import { OnInit } from "@angular/core";


//Decorators 




export class LoggingService {


// attibute

//Constructor

constructor(){

}
//NgOnit and other hooks if it is a decorator ( not in this case )



// Methods to Execute

LogConsole( status : string){

    console.log( 'A server status changed, new status: ' +status) ; 
    
}

}