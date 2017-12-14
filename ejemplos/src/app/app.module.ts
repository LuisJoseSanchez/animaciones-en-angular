import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParrafoMenguanteComponent } from './parrafo-menguante/parrafo-menguante.component';
import { CabeceraParrafoImagenComponent } from './cabecera-parrafo-imagen/cabecera-parrafo-imagen.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { StaggerComponent } from './stagger/stagger.component';
import { RutasAnimadasComponent } from './rutas-animadas/rutas-animadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoMenguanteComponent,
    CabeceraParrafoImagenComponent,
    KeyframesComponent,
    StaggerComponent,
    RutasAnimadasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
