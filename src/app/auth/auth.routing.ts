import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from '../layout/components/layout/layout.component';
import { AuthRoutingComponent } from './components/auth-routing/auth-routing.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthRoutingComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      
      {
        path: 'register',
        component: RegisterComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
