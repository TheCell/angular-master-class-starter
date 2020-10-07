import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.scss']
})
export class ContactsEditorComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private eventBusService: EventBusService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.contact$ = this.contactsService.getContact(id).pipe(tap(contact => {
      this.eventBusService.emit('appTitleChange', contact.name + ' Edit');
    }))
  }

  cancel(contact: Contact) {
    // this.goToDetails(contact);
    this.goToDetails();
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe(() => {
      // this.goToDetails(contact);
      this.goToDetails();
    })
  }

  // private goToDetails(contact: Contact) {
  //   this.router.navigate(['/contact', contact.id]);
  // }

  private goToDetails() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
