import { Component, Input, OnChanges } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'my-cms-contact-group',
  templateUrl: './contact-group.component.html'
  
})
export class ContactGroupComponent implements OnChanges {
	@Input() selectedContact: Contact;
	groupContacts: Contact[] = [];
	constructor() { }

	ngOnChanges() {
        this.groupContacts = this.selectedContact.group;
	}

}
