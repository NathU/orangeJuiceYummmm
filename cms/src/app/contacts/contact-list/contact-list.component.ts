import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';
/*import { ContactItemComponent } from './contact-item.component';*/

@Component({
  selector: 'my-cms-contact-list',
  templateUrl: './contact-list.component.html'
  
})
export class ContactListComponent implements OnInit {
	contacts: Contact[] = [];
	dummy_var = new Contact(0, 'naym', 'email@email.email', '1-800-phone', 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMoAAAAJDZkZjQ3ZDI5LWVhNzUtNDcyNy04YzNjLTZlODEyNzY2YjFiOA.jpg', 'group?');
	
	@Output() contactSelected = new EventEmitter<Contact>();
	
	constructor() { }

	ngOnInit() {
	}
	
	onSelected(contact: Contact) {
		this.contactSelected.emit(contact);
	}

}
