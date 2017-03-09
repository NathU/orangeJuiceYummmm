import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'my-cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  constructor(private docService: DocumentsService) {
    this.docService = docService;
    //this.messages = this.msgService.getMessages();

  }

  ngOnInit() {
    this.documents = this.docService.getDocuments();
  }

}
