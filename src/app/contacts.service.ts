import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface ContactResponse { item: Contact }
interface ContactsResponse { items: Contact[] }

@Injectable()
export class ContactsService {
  private API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient) {}

  public getContact(id: string): Observable<Contact> {
    let url = `${this.API_ENDPOINT}/contacts/${id}`;
    return this.http.get<ContactResponse>(url)
      .pipe(map((data) => data.item));
  }

  public getContacts(): Observable<Contact[]> {
    let url = `${this.API_ENDPOINT}/contacts`;
    return this.http.get<ContactsResponse>(url)
      .pipe(map((data) => data.items));
  }

  public updateContact(contact: Contact): Observable<Contact> {
    let url = `${this.API_ENDPOINT}/contacts/${contact.id}`;
    return this.http.put<ContactResponse>(url, contact).pipe(map(data => data.item));
  }

  public search(term: string) : Observable<Array<Contact>> {
    let url = `${this.API_ENDPOINT}/search?text=${term}`;
    return this.http.get<ContactsResponse>(url)
      .pipe(map((data) => data.items));
  }
}
