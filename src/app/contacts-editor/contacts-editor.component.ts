import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.scss']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.contactsService
    .getContact(id)
    .subscribe((contact) => {
      this.contact = contact;
    })
  }

  cancel(contact: Contact) {
    // this.goToDetails(contact);
    this.goToDetails();
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe((update) => {
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
