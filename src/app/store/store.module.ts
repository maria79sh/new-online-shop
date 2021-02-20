import { MatDividerModule } from '@angular/material/divider';
import { StoreRoutingModule } from './store.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    StoreRoutingComponent,
  ],

  imports: [CommonModule, MaterialModule, StoreRoutingModule, MatDividerModule, MatCardModule],
})
export class StoreModule {}
