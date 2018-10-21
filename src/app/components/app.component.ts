import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    colorBackRight: string = '#007bff';
    colorFontRight: string = '#ffffff';
    // colorBackLeft: string = '#00DD00';
    // colorFontLeft: string = '#DD0000';
    messages = [
        {"text": "Hello", "date":"", "userOwner":true},
        {"text": "Hello again", "date":"", "userOwner": false},
        {"text": "How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?", "date":"", "userOwner": true}
    ];
    //messages = [];

    onInputReceived(input: string) {
        let newMessage = {"text": input, "date":"", "userOwner":true};
        this.messages.push(newMessage);
    }
}
