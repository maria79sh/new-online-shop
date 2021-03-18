import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  ID : any;
  list: Array<{ID: any}> = []; 

  constructor(private http: HttpClient) {}
  

  getItem(id : any){
    this.list.push(this.ID);
    const headers = {
      'content-type': 'application/json',
      Authorization: 'Bearer' + localStorage.getItem('token'),
    };
     return this.http.get(environment.baseUrl + 'goods' + '/'+ id , {headers});
}
}
