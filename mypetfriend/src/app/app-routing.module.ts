import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { PetsViewsComponent } from './views/pets-views/pets-views.component';
import { PetsHomepageComponent } from './views/pets-homepage/pets-homepage.component';

const routes: Routes = [
  {
    path: '', component:PetsViewsComponent,
    children: [
      {path: '', redirectTo: 'pets-homepage', pathMatch: 'full'},
      {path: 'pets-homepage', component: PetsHomepageComponent}
    ],
    canActivate: [AuthGuardService]
  },

  {
    path: '', component:HomeComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomepageComponent},
      {path: 'dologin', component: LoginComponent},
      {path: 'doRegister', component: RegisterComponent}
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
