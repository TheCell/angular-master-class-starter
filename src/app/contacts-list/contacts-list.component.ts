import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts$ = this.contactsService.getContacts();
  }

  trackedById(index: number, contact: Contact) {
    return contact.id;
  };

  search(term: string) {
    this.contacts$ = this.contactsService.search(term);
  }
}
