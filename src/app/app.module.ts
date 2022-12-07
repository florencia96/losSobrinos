import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariedadListComponent } from './variedad-list/variedad-list.component';
import { FormsModule } from '@angular/forms';
import { LosSobrinosPromocionesComponent } from './los-sobrinos-promociones/los-sobrinos-promociones.component';
import { LosSobrinosVariedadesComponent } from './los-sobrinos-variedades/los-sobrinos-variedades.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LosSobrinosContactoComponent } from './los-sobrinos-contacto/los-sobrinos-contacto.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    VariedadListComponent,
    LosSobrinosPromocionesComponent,
    LosSobrinosVariedadesComponent,
    CarritoComponent,
    LosSobrinosContactoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
