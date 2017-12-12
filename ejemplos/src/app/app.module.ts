import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParrafoMenguanteComponent } from './parrafo-menguante/parrafo-menguante.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoMenguanteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
