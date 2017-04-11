import { Component, OnInit } from '@angular/core';

import { MessageListComponent } from './index';
import { Message } from './index';

@Component({
  selector: 'my-cms-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
