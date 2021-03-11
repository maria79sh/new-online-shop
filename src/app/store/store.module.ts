import { MatDividerModule } from '@angular/material/divider';
import { StoreRoutingModule } from './store.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';

const matModules = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
];
@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    StoreRoutingComponent,
  ],

  imports: [...matModules, CommonModule, StoreRoutingModule, HttpClientModule],
  providers: [StoreService],

})
export class StoreModule {}
