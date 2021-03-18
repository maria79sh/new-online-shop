import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  authenticated() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  registerUser(phone: String, password: string) {
    return this.http.post(environment.baseUrl + 'auth/signup', {
      userName: phone,
      password: password,
    });
    // .pipe(
    //   catchError((error) => {
    //     error.sub
    //   })
    // );
  }

  loginUser(phone: string, password: string) {
    return this.http.post(environment.baseUrl + 'auth/login', {
      userName: phone,
      password: password,
    });
  }
}
