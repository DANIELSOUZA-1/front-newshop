import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navigation/navbar/navbar.component';
import { NavDrawerComponent } from 'src/app/components/navigation/nav-drawer/nav-drawer.component';
import { SharedSubjectModule } from 'src/app/shared-subject/shared-subject.module';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';


@NgModule({
    declarations: [
        CartComponent,
    ],

    imports     : [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatMenuModule,
        SharedSubjectModule,
        //SharedModule

    ], exports: [
        CartComponent,
    ],
    providers: [CartService]
})
export class CartModule
{
}
