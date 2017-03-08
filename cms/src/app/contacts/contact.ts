import {Injectable} from '@angular/core';

@Injectable()
export class Contact {
	constructor(public contactId:string, public name:string, public email:string, public phone:string, public imageUrl:string, public group:Contact[]) {
		this.contactId = contactId;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.imageUrl = imageUrl;
		this.group = group;
	}
}
