import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserComponent } from './components/user.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations : [
        UserLoginComponent,
        UserRegisterComponent,
        UserComponent,
    ],

    imports : [
        CommonModule,
        MaterialModule
    ]

})
export class UserModule {
}