import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  public requestLogin: RequestLogin

  constructor(
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doRegister(): void {
    this.loginService.doRegister(this.requestLogin).subscribe({
      next: (data)=> {
        this.router.navigate(['dologin'])
        this.alertService.success(data.msg)
        console.log(data)
      }, error: (err)=>{
          this.alertService.error(err.error.error)
          console.log(err.error)
      },
      complete: ()=>{
        console.log()
      }
    })
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

  toggleShowConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword
  }
}
