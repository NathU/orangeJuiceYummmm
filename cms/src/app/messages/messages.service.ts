import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {
  messages: Message[] = [];
  constructor() { }

  getMessages() {
    var MOCKMESSAGES: Message[] = [
      { 'msgId': '1',  'subject': 'Assignment 2', 'text': 'Assignment 2 is due tomorrow', 'sender': 'Instructor' }
      , { 'msgId': '2',  'subject': 'Angular Routing', 'text': 'Anyone found out how to do routing yet?', 'sender': 'Tom' }
      , { 'msgId': '3',  'subject': 'Re: Angular Routing', 'text': 'Udemy Angular 2 Routing shows you how', 'sender': 'Bill' }];

    this.messages = MOCKMESSAGES;

    return this.messages;
  }

  getMessage(idx: number) {
    return this.messages[idx];
  }

}
