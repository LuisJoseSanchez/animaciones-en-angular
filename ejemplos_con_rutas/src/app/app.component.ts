import { Component, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from "@angular/animations";

import { ROUTER_TRANSITION } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    ROUTER_TRANSITION
  ]
})
export class AppComponent {
  
  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['state'] || 'inicio'; 
  }
}
