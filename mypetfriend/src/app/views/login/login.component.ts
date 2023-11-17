import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { RequestUser } from 'src/app/resources/models/RequestUser';
import { UserService } from 'src/app/resources/services/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isLogged () {
    const jwt = window.localStorage.getItem('token')
    if (jwt) {
      this.router.navigate(['home'])
      window.localStorage.removeItem('token')
    } 
  }
  


  //hidden/show password system 
  showPassword: boolean = false;


  public requestUser: RequestUser

  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.requestUser = new RequestUser();
    this.isLogged()
    
  }
  
  public doLogin(): void {
    this.userService.doLogin(this.requestUser).subscribe({
      next: (data)=> {
        const token = data.token
        window.localStorage.setItem('token', token)
        this.router.navigate(['pets-homepage'])
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


  //Hidden and show password system 
  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

  
}
