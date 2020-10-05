import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service'

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
