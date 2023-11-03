import { Injectable } from '@angular/core';
import { ResponseUser } from '../models/ResponseUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public userResponse: ResponseUser;

public clear(): void {
    this.userResponse = undefined!;
}

public isAuthenticated():boolean {
    return Boolean(this.userResponse?.jwt)
}
}
