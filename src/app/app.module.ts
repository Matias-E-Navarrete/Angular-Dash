import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  AuthModule,
  SharedModule,
  PagesModule
];

const COMPONENTS = [
  AppComponent,
  NoPageFoundComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
