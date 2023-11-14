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
   private router: Router 
  ){}

  ngOnInit() {
    this.isLogged()
  }
  public logged() {
    const log = window.localStorage.getItem('token')
    if (log) {
      return true
    } else {
      return false
    }
  }

  public logout(){
    this.authGuard.doLogout()
    
  }

  public isLogged () {
    const jwt = window.localStorage.getItem('token')
    if (jwt) {
      this.router.navigate(['home'])
    } 
  }
  
}
