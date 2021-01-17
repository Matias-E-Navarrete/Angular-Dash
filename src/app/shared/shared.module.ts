import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbsComponent } from './components/breadcumbs/breadcumbs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
