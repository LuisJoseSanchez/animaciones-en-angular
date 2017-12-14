import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParrafoMenguanteComponent } from './parrafo-menguante/parrafo-menguante.component';
import { CabeceraParrafoImagenComponent } from './cabecera-parrafo-imagen/cabecera-parrafo-imagen.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { StaggerComponent } from './stagger/stagger.component';
import { RutasAnimadasComponent } from './rutas-animadas/rutas-animadas.component';
import { ROUTES } from './routes';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoMenguanteComponent,
    CabeceraParrafoImagenComponent,
    KeyframesComponent,
    StaggerComponent,
    RutasAnimadasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
