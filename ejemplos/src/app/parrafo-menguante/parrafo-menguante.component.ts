import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-parrafo-menguante',
  templateUrl: './parrafo-menguante.component.html',
  styleUrls: ['./parrafo-menguante.component.css'],
  animations: [
    trigger('animacionAchica',[
      state('minusculo', style({ transform: 'scale(0.1)'})),
      transition('* => minusculo', animate('1000ms'))
    ])
  ]
})
export class ParrafoMenguanteComponent implements OnInit {

  estado;

  constructor() { }

  ngOnInit() {
  }

  achica() {
    this.estado = 'minusculo';
  }
}
