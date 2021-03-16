import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/store/models/product';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) {}


  ngOnInit() {
    // this.cartService.getItem().subscribe((res : any)=>{
    //   console.log(res);
    // })
  }
}
