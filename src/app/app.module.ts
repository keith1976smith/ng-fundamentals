import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventsListResolver,
  CreateSessionComponent,
  SessionsListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';

import { DurationPipe } from './events/shared/duration.pipe';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { Error404Component } from './errors/404.component';
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  IToastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const toastr: IToastr = window['toastr'];
const jQuery = window['$'];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionsListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventsListResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have un-saved data. Do you really want to cancel?');
  }
  return true;
}
