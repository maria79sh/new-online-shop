import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {StoreComponent} from './components/store.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductItemComponent} from './components/product-list/product-item/product-item.component';


@NgModule({
    declarations : [
        StoreComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductItemComponent
    ],

    imports : [
        CommonModule,
        MaterialModule
    ]

})
export class StoreModule {
}