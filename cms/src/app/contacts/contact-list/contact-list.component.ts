import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'my-cms-contact-list',
  templateUrl: './contact-list.component.html'

})
export class ContactListComponent implements OnInit {
	contacts: Contact[] = [];
	//contact: Contact = null;

	//dummy_var = new Contact("0", 'naym', 'email@email.email', '1-800-phone', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMoAAAAJDZkZjQ3ZDI5LWVhNzUtNDcyNy04YzNjLTZlODEyNzY2YjFiOA.jpg', 'group?');

	@Output() contactSelected = new EventEmitter<Contact>();

	constructor(private contactService: ContactsService) {
    this.contacts = this.contactService.getContacts();

  }

	ngOnInit() {
    //this.getContacts();
    this.contacts = this.contactService.getContacts();
	}

	onSelected(contact: Contact) {
		this.contactSelected.emit(contact);
	}



}
