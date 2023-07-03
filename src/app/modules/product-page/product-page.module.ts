import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ProductPageRoutes } from './product-page.routing';
import { ProductPageComponent } from './product-page.component';


@NgModule({
    declarations: [
        ProductPageComponent,
    ],
    imports     : [
        RouterModule.forChild(ProductPageRoutes),
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatMenuModule,
        //SharedModule
    ]
})
export class ProductPageModule
{
}
