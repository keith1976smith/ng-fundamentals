import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
    <nav-bar></nav-bar>
    <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
