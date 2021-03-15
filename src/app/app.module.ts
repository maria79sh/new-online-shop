import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const HTTP_AUTH_GUARD: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthGuard,
  multi: true,
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [HTTP_AUTH_GUARD, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
