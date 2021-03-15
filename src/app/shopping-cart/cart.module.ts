import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CartRoutingComponent } from './components/cart-routing/cart-routing.component';
import { CartRoutingModule } from './cart.routing';
import { CartComponent } from './components/cart/cart.component';

const matModules =[ 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
]
@NgModule({
  declarations: [CartComponent , CartRoutingComponent],

  imports: [
    ...matModules,
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    HttpClientModule
    
  ],
//   providers: [AuthService]
})
export class CartModule {}
