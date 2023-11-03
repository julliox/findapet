import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { RequestUser } from '../models/RequestUser';
import { Observable } from 'rxjs';
import { ResponseUser } from '../models/ResponseUser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpClient: HttpClient,
    private authService: AuthService) { }

  public doLogin(requestUser: RequestUser): Observable<ResponseUser> {
    return this.HttpClient.post<ResponseUser>('http://localhost:3000/api/login', requestUser).pipe(tap((userResponse) => (
      this.authService.userResponse = userResponse
    )));
  }

  public doRegister(requestUser: RequestUser): Observable<ResponseUser>{
    return this.HttpClient.post<ResponseUser>('http://localhost:3000/api/users', requestUser)
  }
}
