import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'my-cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private msgService: MessagesService) {
    this.msgService = msgService;
    //this.messages = this.msgService.getMessages();

  }

  ngOnInit() {
    this.messages = this.msgService.getMessages();
  }
}
