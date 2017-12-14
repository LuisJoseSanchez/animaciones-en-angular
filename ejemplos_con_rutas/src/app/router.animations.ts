import {trigger, animate, state, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const ROUTER_TRANSITION = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter,:leave', [
      style({
        position: 'fixed'
      })
    ],{ optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
        animateChild()
      ], { optional: true }),
      query(':leave', [
        animate('1000ms', style({ opacity: 0 })),
        animateChild()
      ], { optional: true })
    ])
  ]),
])