import { Component, Input, Output, EventEmitter } from '@angular/core';

let style = `
  .chat-container {
    margin: auto;
    padding-top: 15px;
  }

  .list-messages {
    display: flex;
    flex-direction: column;
    height: 88%;
    overflow: auto;
  }

  .left-message {
    display: flex;
    margin-left: 10px;
  }

  .right-message {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }

  .input-message {
    border-top: 2px solid grey;
    height: 12%;
  }

  .input-text-message {
    height: 100%;
    width: 80%;
  }

  .input-send {
    color: #007bff;
    position: relative;
    left: 7px;
    top: -22px;
  }
`;

@Component({
  selector: 'chat',
    template: `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <div [ngStyle]="{'width': width, 'height': height, 'border': border}" class="chat-container">
        <div class="list-messages">
          <div *ngFor="let message of messages">
            <message class="message" [text]="message.text" [date]="message.date" [colorBackRight]="colorBackRight" [colorFontRight]="colorFontRight"
            [colorBackLeft]="colorBackLeft" [colorFontLeft]="colorFontLeft" [owner]="message.userOwner"
            [ngClass]="{'left-message': !message.userOwner, 'right-message': message.userOwner}"></message>
          </div>
        </div>
        <div class="input-message">
          <textarea class="input-text-message" [(ngModel)]="textInput" placeholder="Type text here" (keyup)="onKey($event)"></textarea>
          <i class="fa fa-paper-plane fa-2x input-send" aria-hidden="true" (click)="sendTextInput()"></i>
        </div>
      </div>
    `,
    styles: [style]
})
export class ChatComponent {


    @Input() messages: any[];
    @Input() colorBackRight: string = '#007bff';
    @Input() colorFontRight: string = '#ffffff';
    @Input() colorBackLeft: string = '#f8f9fa';
    @Input() colorFontLeft: string = '#343a40';
    @Input() width: string = '300px';
    @Input() height: string = '550px';
    @Input() border: string = '1px solid black';
  
    @Output() inputSent = new EventEmitter<string>();

    textInput: string = '';

    constructor() {}

    ngOnInit() {}

    sendTextInput() {
      if (this.textInput.length > 1) {
        this.inputSent.emit(this.textInput);
        this.textInput = '';
      }
    }

    onKey(event: any) {
      if (event.keyCode == 13) {
        this.sendTextInput();
      }
    }
}
