import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestUser } from 'src/app/resources/models/RequestUser';
import { AlertService } from 'src/app/resources/services/alert.service';
import { UserService } from 'src/app/resources/services/User.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  public requestUser: RequestUser

  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.requestUser = new RequestUser();
  }

  public doRegister(): void {
    this.userService.doRegister(this.requestUser).subscribe({
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
