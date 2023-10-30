import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //hidden/show password system 
  showPassword: boolean = false;


  public requestLogin: RequestLogin

  constructor(
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }
  
  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe({
      next: (data)=> {
        this.router.navigate([''])
        console.log(data)
      }, error: (err)=>{
          this.alertService.error(err.error.error)
      },
      complete: ()=>{
        console.log()
      }
    })
  }


  //Hidden and show password system 
  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }
}
