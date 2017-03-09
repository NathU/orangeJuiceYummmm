import {Injectable} from '@angular/core';

@Injectable()
export class Document {
	constructor(public docId:string, public name:string, public description:string, public url:string, public children:Document[]) {
		this.docId = docId;
		this.name = name;
		this.description = description;
		this.url = url;
    this.children = children; // needs to be a List??

	}
}
