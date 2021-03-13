import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartRoutingComponent } from './components/cart-routing/cart-routing.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartRoutingComponent,
    children: [
      { path: '', redirectTo: 'cart', pathMatch: 'full' },
      {
        path: 'cart',
        component: CartComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
