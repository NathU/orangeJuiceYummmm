import { Injectable } from '@angular/core';
import { Document } from './document';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable()
export class DocumentsService {
  docs: Document[] = [];

  constructor() { }

  getDocuments() {
    this.docs = MOCKDOCUMENTS;
    return this.docs;
  }

  getDocument(idx: number) {
    return this.docs[idx];
  }

}
