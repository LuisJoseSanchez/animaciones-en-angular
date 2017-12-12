import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParrafoMenguanteComponent } from './parrafo-menguante/parrafo-menguante.component';
import { CabeceraParrafoImagenComponent } from './cabecera-parrafo-imagen/cabecera-parrafo-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoMenguanteComponent,
    CabeceraParrafoImagenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
