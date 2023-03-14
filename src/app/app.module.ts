import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Automoviles } from './Automoviles/Automoviles.component';
import { EjemploBasico } from './EjemploBasico/EjemploBasico.component';
import { DetalleAutomovilComponent } from './detalle-automovil/detalle-automovil.component';
import { FormularioAutomovilComponent } from './formulario-automovil/formulario-automovil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,EjemploBasico,Automoviles, DetalleAutomovilComponent, FormularioAutomovilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
