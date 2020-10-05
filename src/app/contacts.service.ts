import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';
import { map } from 'rxjs/operators';

interface ContactResponse { item: Contact }
interface ContactsResponse { items: Contact[] }

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4201';

  constructor(private http: HttpClient) {}

  public getContacts() {
    let url = this.API_ENDPOINT + '/api/contacts';
    return this.http.get<ContactsResponse>(url)
      .pipe(map((data) => data.items));
  }

  public getContact(id: string) {
    let url = this.API_ENDPOINT + '/api/contacts/' + id;
    return this.http.get<ContactResponse>(url)
      .pipe(map((data) => data.item));
  }
}
