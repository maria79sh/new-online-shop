import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from '../shopping-cart/components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRoutingComponent,
    children: [
      { path: '', redirectTo: '/store/product-list', pathMatch: 'full' },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'shopping',
        loadChildren: () =>
          import('../shopping-cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
