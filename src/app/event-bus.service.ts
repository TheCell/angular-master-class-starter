import { Injectable } from '@angular/core';
import { Observable, Observer, ReplaySubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

type EventType = 'appTitleChange';

interface EventBusArgs {
  type: EventType,
  data: any,
}

@Injectable()
export class EventBusService {
  private _messages$ = new ReplaySubject<EventBusArgs>();

  constructor() { }

  emit(eventType: EventType, data: any) {
    const event: EventBusArgs = {
      type: eventType,
      data: data
    }

    this._messages$.next(event);
  }

  observe(eventType: EventType) {
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
