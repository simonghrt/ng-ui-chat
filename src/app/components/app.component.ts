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
    messages = [];

    onInputReceived(input: string) {
        const newMessage = {"text": input, "date":"", "userOwner":true};
        this.messages.push(newMessage);
        const newAnswer = {"text": "You said : " + input, "date": "", "userOwner": false};
        this.messages.push(newAnswer); 
    }
}
