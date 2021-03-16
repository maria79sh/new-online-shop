import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from 'src/app/shopping-cart/services/cart.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
}) 
export class StoreService {
  constructor(private http: HttpClient, private cartService : CartService) {}

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

  putGoods(name : string, imageUrl : string, description : string,
    price : number, count : number){
      const headers = {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'My-Custom-Header': 'foobar',
      };
          // console.log(name,imageUrl,description,price,count);
         return this.http.post(environment.baseUrl +'goods', {
            name : name,
            imageUrl : imageUrl,
            description : description,
            price : price,
            count : count
          },{headers})

  }

  deleteGoods(id : any){
    return this.http.delete(environment.baseUrl +'goods'+ id);
  }

  addToList(id : any){
     this.cartService.getItem(id);
  }

  
}
