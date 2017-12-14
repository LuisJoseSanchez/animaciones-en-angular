import { StaggerComponent } from "./stagger/stagger.component";
import { ParrafoMenguanteComponent } from "./parrafo-menguante/parrafo-menguante.component";
import { CabeceraParrafoImagenComponent } from "./cabecera-parrafo-imagen/cabecera-parrafo-imagen.component";
import { KeyframesComponent } from "./keyframes/keyframes.component";
import { Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, data: { state: 'inicio' } },
  { path: 'ejemplo1', component: ParrafoMenguanteComponent, data: { state: 'ejemplo1' } },
  { path: 'ejemplo2', component: CabeceraParrafoImagenComponent, data: { state: 'ejemplo2' } },
  { path: 'ejemplo3', component: KeyframesComponent, data: { state: 'ejemplo3' } },
  { path: 'ejemplo4', component: StaggerComponent, data: { state: 'inicio' } },
];
