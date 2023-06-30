import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';
import { NavigationModule } from './components/navigation/navigation.module';
import { SharedSubjectModule } from './shared-subject/shared-subject.module';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

import { DecimalPipe, registerLocaleData } from '@angular/common';


const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedSubjectModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    MatSnackBarModule,
    HttpClientModule 
  ],
  providers: [[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
    DecimalPipe
  ]],
  bootstrap: [AppComponent]
})

export class AppModule { }
