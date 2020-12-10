import { LayoutComponent } from './components/layout/layout.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, CarouselComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
