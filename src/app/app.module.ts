import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ClassProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.gaurd';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartService } from './shopping-cart/services/cart.service';
import { StoreService } from './store/services/store.service';

const HTTP_AUTH_GUARD: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthGuard,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [HTTP_AUTH_GUARD,
    AuthGuard,
    CartService,
    StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
