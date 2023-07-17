import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'src/app/modules/home/home.component';
import { landingHomeRoutes } from 'src/app/modules/home/home.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutes } from './checkout.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CheckoutComponent,
    ],
    imports     : [
        RouterModule.forChild(CheckoutRoutes),
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatMenuModule,
        ReactiveFormsModule,

        //SharedModule
    ]
})
export class CheckoutModule
{
}
