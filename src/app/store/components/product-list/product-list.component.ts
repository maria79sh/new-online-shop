import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CartService } from 'src/app/shopping-cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  // products: Product[] = [
  //   new Product(
  //     'Laptop',
  //     'For Personal Use',
  //     'https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG',
  //     400000
  //   ),
  //   new Product(
  //     'Printer',
  //     'For Office Use',
  //     'https://media.4rgos.it/s/Argos/7630552_R_SET?$Main768$&w=620&h=620',
  //     120000
  //   ),
  //   new Product(
  //     'Scanner',
  //     'For Office Use',
  //     'https://media.teds.com.au/media/catalog/product/cache/1/image/750x750/9df78eab33525d08d6e5fb8d27136e95/e/p/epson-perfection-v800-filmphoto-scanner.jpg?cache_timestamp=1567485080',
  //     120000
  //   ),
  //   new Product(
  //     'Coffee maker',
  //     'Kitchen Supply',
  //     'https://target.scene7.com/is/image/Target/GUEST_3b938a07-161f-4852-83b4-dd2d54949bba?wid=488&hei=488&fmt=pjpeg',
  //     120000
  //   ),
  //   new Product(
  //     'Blender',
  //     'Kitchen Supply',
  //     'https://www.robertdyas.co.uk/media/catalog/product/cache/ee7f57371963fdaf9f4353c1acf7bd18/1/8/184674.png',
  //     120000
  //   ),
  //   new Product(
  //     'Scanner',
  //     'For Office Use',
  //     'https://www.bhphotovideo.com/images/images2000x2000/epson_b11b231201_perfection_v19_photo_scanner_1114127.jpg',
  //     120000
  //   ),
  //   new Product(
  //     'Fan',
  //     'Home Furniture',
  //     'https://www.lightology.com/img/prod/370/102390.jpg',
  //     120000
  //   ),
  //   new Product(
  //     'Printer',
  //     'For Office Use',
  //     'https://static.bhphoto.com/images/images2500x2500/1565105027_1496118.jpg',
  //     120000
  //   ),
  //   new Product(
  //     'Camera',
  //     'Polaroid',
  //     'https://www.powerplanetonline.com/cdnassets/polaroid_now_negro_camara_instantanea_03_ad_l.jpg',
  //     120000
  //   ),
  // ];

  constructor(private storeService:StoreService,private cartService : CartService) {}

  ngOnInit() {
    this.storeService.getGoods().subscribe((res : any)=>{
      console.log(res);
      this.products = res;
    })
  }

  onDelete(id : any){
    console.log(id);
    this.storeService.deleteGoods(id);
  }

  onAddToCart(id : any){
    console.log(id);
    this.storeService.addToList(id);
  }
}
