import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
