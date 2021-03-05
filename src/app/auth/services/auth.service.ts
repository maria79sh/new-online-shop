import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  authenticated(){
      this.isAuthenticated = !this.isAuthenticated;
  }

  registerUser(phone: String, password: string){
    //   return this.http
    //   .post();
  }

  loginUser(phone: string, password: string){
    //   return this.http
    //   .post();
  }
}
