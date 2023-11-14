import { Injectable } from '@angular/core';
import { ResponseUser } from '../models/ResponseUser';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(
    route: Router,
    ) {

}
public userResponse: ResponseUser;

public clear(): void {
    this.userResponse = undefined!;
}

public isAuthenticated():boolean {
    return Boolean(this.userResponse?.token)
}

}
