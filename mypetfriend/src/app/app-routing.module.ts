import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'dologin', component: LoginComponent},
  {path: 'doRegister', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
