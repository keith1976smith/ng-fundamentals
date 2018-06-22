import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
