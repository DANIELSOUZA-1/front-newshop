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
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavDrawerComponent } from 'src/app/components/nav-drawer/nav-drawer.component';


@NgModule({
    declarations: [
        LandingHomeComponent,
        NavbarComponent,
        NavDrawerComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatMenuModule,
        //SharedModule
    ]
})
export class LandingHomeModule
{
}
