import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
      AuthRoutingComponent,
      RegisterComponent,
      LoginComponent

  ],

  imports: [CommonModule, MaterialModule, AuthRoutingModule, 
    MatCardModule, MatFormFieldModule, MatToolbarModule
  ],
})
export class AuthModule {}
