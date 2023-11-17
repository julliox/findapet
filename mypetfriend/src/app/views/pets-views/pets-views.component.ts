import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/resources/services/auth-guard.service';

@Component({
  selector: 'app-pets-views',
  templateUrl: './pets-views.component.html',
  styleUrls: ['./pets-views.component.css']
})
export class PetsViewsComponent {
  constructor(
    private authGuard: AuthGuardService,
    
   ){}
 
   public logout(){
     this.authGuard.doLogout()
     
   }
}
