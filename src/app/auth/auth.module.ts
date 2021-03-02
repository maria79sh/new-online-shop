import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const matModules =[ 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
]
@NgModule({
  declarations: [AuthRoutingComponent, RegisterComponent, LoginComponent],

  imports: [
    ...matModules,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    
  ],
})
export class AuthModule {}
