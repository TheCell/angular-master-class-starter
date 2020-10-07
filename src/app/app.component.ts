import { Component, OnInit } from '@angular/core';
import { Observable, asyncScheduler } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title$: Observable<any>;

  constructor(public eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.title$ = this.eventBusService.observe('appTitleChange').pipe(subscribeOn(asyncScheduler));
  }
}
