import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { RequestLogin } from '../models/RequestLogin';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private HttpClient: HttpClient,
    private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.HttpClient.post<ResponseLogin>('http://localhost:3000/api/login', requestLogin).pipe(tap((loginResponse) => (
      this.authService.loginResponse = loginResponse
    )));
  }

  public doRegister(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.HttpClient.post<ResponseLogin>('http://localhost:3000/api/users', requestLogin).pipe(tap((loginResponse) => (
      this.authService.loginResponse = loginResponse
    )));
  }
}
