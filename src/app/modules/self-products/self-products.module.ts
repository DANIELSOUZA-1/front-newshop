import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SharedModule } from 'app/shared/shared.module';
import { landingHomeRoutes } from 'src/app/modules/home/home.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SelfProductsComponentList } from './self-products-list/self-products-list.component';
import { SelfProductsRoutes } from './self-products.routing';
import { SelfProductsComponentEdit } from './self-products-edit/self-products-edit.component';


@NgModule({
    declarations: [
      SelfProductsComponentList,
      SelfProductsComponentEdit,
    ],
    imports     : [
        RouterModule.forChild(SelfProductsRoutes),
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatMenuModule,
        //SharedModule
    ]
})
export class SelfProductsModule
{
}
