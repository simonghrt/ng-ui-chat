import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent {


    @Input() messages: any[];
    @Input() colorBackRight: string = '#007bff';
    @Input() colorFontRight: string = '#ffffff';
    @Input() colorBackLeft: string = '#f8f9fa';
    @Input() colorFontLeft: string = '#343a40';
  
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
