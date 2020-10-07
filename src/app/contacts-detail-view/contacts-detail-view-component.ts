import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view-component',
  templateUrl: './contacts-detail-view-component.html',
  styleUrls: ['./contacts-detail-view-component.scss']
})
export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToEditor() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
