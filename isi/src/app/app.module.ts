import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BanerComponent } from './baner/baner.component';


import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
/*ROUTING */
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';


/*ROUTING */
const appRoutes: Routes =[
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},

];



@NgModule({
  declarations: [
    AppComponent,


    BanerComponent,

    NavbarComponent,
    InicioComponent,
    NosotrosComponent


  ],


  imports: [
    /*ROUTING */
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
