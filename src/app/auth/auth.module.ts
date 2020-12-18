import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
      AuthRoutingComponent,
      RegisterComponent,
      LoginComponent

  ],

  imports: [CommonModule, MaterialModule, AuthRoutingModule],
})
export class StoreModule {}
