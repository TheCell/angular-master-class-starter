import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$: Subject<string> = new Subject<string>();

  constructor(private contactsService: ContactsService,
    private eventBusService: EventBusService) { }

  ngOnInit(): void {
    // const search$ = this.terms$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap((term) => this.contactsService.search(term))
    // );

    // const initialList$ = this.contactsService.getContacts().pipe(delay(2000), takeUntil(this.terms$))

    // this.contacts$ = merge(search$, initialList$);

    // or
    // this.contacts$ = this.terms$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   startWith(''),
    //   switchMap((term) => this.contactsService.rawSearch(term))
    // );

    this.contacts$ = this.contactsService.search(this.terms$, 300);
    this.eventBusService.emit('appTitleChange', 'Contacts');
  }

  trackedById(index: number, contact: Contact) {
    return contact.id;
  };
}
