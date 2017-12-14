import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-keyframes",
  templateUrl: "./keyframes.component.html",
  styleUrls: ["./keyframes.component.css"],
  animations: [
    trigger("animacion", [
      state("inicial", style({ opacity: 1 })),
      state("final", style({ opacity: 0 })),
      // Animación en varios pasos
      transition("inicial => final", animate("4000ms ease-in",
        keyframes([
          style({ transform: "translateX(200px) rotate(90deg)", offset: 0.2 }),
          style({ transform: "translateX(-300px) rotate(180deg)", offset: 0.4 }),
          style({ transform: "translateY(100px) rotate(270deg)", offset: 0.6 }),
          style({ transform: "rotate(0deg)", offset: 0.8 }),
          style({ transform: "rotate(90deg)", offset: 0.9 }),
          style({ transform: "translateX(100px) scale(0.1) rotate(180deg)", offset: 1 })
        ])
      )),
      transition("final => inicial", animate("3000ms"))
    ])
  ]
})
export class KeyframesComponent implements OnInit {
  estado = "inicial";

  constructor() {}

  ngOnInit() {}

  iniciaAnimacion() {
    this.estado = "final";
  }

  reiniciaAnimacion() {
    this.estado = "inicial";
  }
}
