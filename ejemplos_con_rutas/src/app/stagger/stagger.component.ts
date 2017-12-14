import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.css'],
  animations: [
    trigger('animacionDeBotones', [

      state('inactivo', style({ transform: 'translateX(-200px)'})),

      transition('inactivo => activo', [
        //query('button',style({ transform: 'translateX(-200px)'})),
        query('button',
          stagger('300ms', [
            animate('400ms', style({ transform: 'translateX(200px)'}))
        ]))
      ]),

      transition('activo => inactivo', [
        query('button',
          stagger('150ms', [
            animate('200ms', style({ transform: 'translateX(-200px)'}))
        ]))
      ])
    ])
  ]
})
export class StaggerComponent implements OnInit {

  estadoMenu = 'inactivo';

  botones = ['Inicio', 'Contacto', 'Galería', 'Productos', 'Sobre nosotros'];

  constructor() { }

  ngOnInit() {
  }

  activaMenu() {
    this.estadoMenu = 'activo';
  }

  desactivaMenu() {
    this.estadoMenu = 'inactivo';
  }
}
