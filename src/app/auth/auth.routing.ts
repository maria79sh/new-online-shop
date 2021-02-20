import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from '../layout/components/layout/layout.component';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthRoutingComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      
      {
        path: 'register',
        component: RegisterComponent
      },
      {path : 'login' , component : LoginComponent
    },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
