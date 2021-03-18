import { LayoutComponent } from './components/layout/layout.component';import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



const matModules =[ 
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule

]

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    ...matModules,
    CommonModule,
    LayoutRoutingModule
  ],
})
export class LayoutModule {}
