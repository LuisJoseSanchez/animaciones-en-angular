import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cabecera-parrafo-imagen',
  templateUrl: './cabecera-parrafo-imagen.component.html',
  styleUrls: ['./cabecera-parrafo-imagen.component.css'],
  animations: [
    trigger('animacion',[
      state('chico', style({ transform: 'scale(0.1)'})),
      state('grande', style({ transform: 'scale(2)'})),
      state('fundido', style({ transform: 'opacity(0)'})),
      transition('chico <=> grande', animate('1000ms')),
      transition('* => fundido', animate('2500ms'))
    ])
  ]
})
export class CabeceraParrafoImagenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
