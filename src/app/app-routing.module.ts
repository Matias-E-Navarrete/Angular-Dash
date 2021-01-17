import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Components
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NoPageFoundComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
