import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cabecera-parrafo-imagen',
  templateUrl: './cabecera-parrafo-imagen.component.html',
  styleUrls: ['./cabecera-parrafo-imagen.component.css'],
  animations: [
    trigger('animacion',[
      state('chico', style({ transform: 'scale(0.2)'})),
      state('rotado', style({ transform: 'rotate(400deg)'})),
      state('fundido', style({ opacity: 0 })),
      transition('* => *', animate('1400ms')),
    ])
  ]
})
export class CabeceraParrafoImagenComponent implements OnInit {

  objetoSeleccionado: string = 'cabecera';

  estado = {
    cabecera: 'original',
    imagen: 'original',
    parrafo:  'original'
  };

  constructor() { }

  ngOnInit() {
  }

  seleccionaElemento(elemento: string) {
    this.objetoSeleccionado = elemento;
  }

  anima(estadoFinal: string) {
    this.estado[this.objetoSeleccionado] = estadoFinal;
  }

  reinicia() {
    this.estado = {
      cabecera: 'original',
      imagen: 'original',
      parrafo:  'original'
    };
  }
}
