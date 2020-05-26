import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { VentasComponent } from './components/ventas/ventas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/view/footer/footer.component';
import { FormVentasComponent } from './components/ventas/form-ventas/form-ventas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    InicioComponent,
    VentasComponent,
    ContactoComponent,
    FooterComponent,
    FormVentasComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
