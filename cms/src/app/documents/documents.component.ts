import { Component, OnInit } from '@angular/core';

import { DocumentListComponent } from './index';
import { Document } from './index';

@Component({
  selector: 'my-cms-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {
	//selectedDocument: Document;
	
	constructor() { }

	ngOnInit() {
   }

}
