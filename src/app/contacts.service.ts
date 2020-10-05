import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = CONTACT_DATA;

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public getContact(id: string): Contact {
    return this.contacts.find(contact => contact.id.toString() === id);
  }
}
