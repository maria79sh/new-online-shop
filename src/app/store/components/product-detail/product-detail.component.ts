import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [''],
    price: 0,
    description: [''],
    count: 0,
    imageUrl: [''],
  });

  constructor(
    private storeService: StoreService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  value = 'Clear me';

  onSubmit() {
    console.log('works');

    this.storeService
      .putGoods(
        this.form.get('name')?.value,
        this.form.get('count')?.value,
        this.form.get('price')?.value,
        this.form.get('description')?.value,
        this.form.get('imageUrl')?.value
      )
      .subscribe((res: any) => {
        console.log(res);
      });

    // console.log(this.form.get('name')?.value,
    // this.form.get('count')?.value,
    // this.form.get('price')?.value,
    // this.form.get('description')?.value,
    // this.form.get('imageUrl')?.value);
  }
}
