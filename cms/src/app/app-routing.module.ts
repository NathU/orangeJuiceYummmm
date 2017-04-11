import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageNewComponent } from './messages/message-new/message-new.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/documents', pathMatch: 'full'},
	{path: 'messages', component: MessagesComponent, children: [
		{path: 'new', component: MessageNewComponent}
	]},
	{path: 'documents', component: DocumentsComponent, children: [
		{path: ':idx', component: DocumentViewComponent},
		{path: ':idx/edit', component: DocumentEditComponent},
		{path: 'new', component: DocumentEditComponent}
	]},
	{path: 'contacts', component: ContactsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

  constructor() { }

  ngOnInit() {
  }

}
