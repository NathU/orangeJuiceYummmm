import { Component, OnInit } from '@angular/core';

import { ContactListComponent } from './contact-list';
import { Contact } from './contact';

@Component({
  selector: 'my-cms-contacts',
  templateUrl: './contacts.component.html'
  
})
export class ContactsComponent implements OnInit {
	selectedContact: Contact;

	constructor() { }

	ngOnInit() {
	}

	
}
