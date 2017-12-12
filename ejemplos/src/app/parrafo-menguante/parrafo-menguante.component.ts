import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-parrafo-menguante',
  templateUrl: './parrafo-menguante.component.html',
  styleUrls: ['./parrafo-menguante.component.css'],
  animations: [
    trigger(animacionAchica,[
      state(minusculo)
    ])
  ]
})
export class ParrafoMenguanteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
