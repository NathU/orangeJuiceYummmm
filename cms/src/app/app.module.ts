import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactGroupComponent } from './contacts/contact-group/contact-group.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item.component';
import { DropdownDirective } from './dropdown.directive';
import { ContactsService } from './contacts/contacts.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-list/message-item.component';
import { MessagesService } from './messages/messages.service';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item.component';
import { DocumentsService } from './documents/documents.service';
import { MessageNewComponent } from './messages/message-new/message-new.component';
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactGroupComponent,
    ContactListComponent,
    ContactItemComponent,
    DropdownDirective,
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    MessageNewComponent,
    DocumentViewComponent,
    DocumentEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	 AppRoutingModule
  ],
  providers: [ContactsService, MessagesService, DocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
