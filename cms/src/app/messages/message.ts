import {Injectable} from '@angular/core';

@Injectable()
export class Message {
	constructor(public msgId:string, public sender:string, public subject:string, public text:string) {
		this.msgId = msgId;
		this.sender = sender;
		this.subject = subject;
		this.text = text;

	}
}
