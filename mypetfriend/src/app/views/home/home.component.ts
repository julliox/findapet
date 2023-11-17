import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/resources/services/auth-guard.service';
import { AuthService } from 'src/app/resources/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
   private authGuard: AuthGuardService,
   
  ){}


  
}
