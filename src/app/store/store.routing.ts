import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StoreRoutingComponent,
    children: [
      { path: '', redirectTo: 'product-list', pathMatch: 'full' },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
