// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChatComponent } from '../components/chat/chat.component';
import { MessageComponent } from '../components/message/message.component';

@NgModule({
  declarations: [
      ChatComponent,
      MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ChatComponent
  ],
  providers: [],
  bootstrap: []
})
export class ChatModule { }
