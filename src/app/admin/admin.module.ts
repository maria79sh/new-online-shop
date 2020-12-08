import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './components/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
    declarations : [
        AdminComponent,
        AdminLoginComponent
    ],

    imports : [
        CommonModule,
        MaterialModule
    ]

})
export class AdminModule {
}