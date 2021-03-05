import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AuthRoutingComponent, RegisterComponent, LoginComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
