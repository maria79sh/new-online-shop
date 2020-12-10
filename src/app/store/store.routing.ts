import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreRoutingComponent } from './components/store-routing/store-routing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StoreRoutingComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
