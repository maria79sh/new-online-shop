import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  //     this.http.get('http://tavana-node.herokuapp.com/goods',{headers}).subscribe((res)=>{
  //       console.log(res);
  //     })

  getGoods() {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'My-Custom-Header': 'foobar',
    };
    return this.http.get(environment.baseUrl + 'goods', { headers });
  }
}
