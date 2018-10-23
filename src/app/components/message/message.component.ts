import { Component, Input } from '@angular/core';

let style = `
  .content-message {
    width: 80%;
  }
  
  .right-content {
    text-align: right;
  }
  
  p {
    display: inline-block;
    padding: 5px;
    border-radius: 10px;
  }  
`;

@Component({
  selector: 'message',
    template: `
        <div *ngIf="owner" class="content-message right-content">
            <p [ngStyle]="{'background-color': colorBackRight, 'color': colorFontRight}">
                {{text}}
            </p>
        </div>
        <div *ngIf="!owner" class="content-message left-content">
            <p [ngStyle]="{'background-color': colorBackLeft, 'color': colorFontLeft}">
                {{text}}
            </p>
        </div>
    `,
    styles: [style]
})
export class MessageComponent {

    @Input('text') text: string; 
    @Input('date') date: any;
    @Input('owner') owner: boolean;
    @Input('colorBackRight') colorBackRight : string;
    @Input('colorFontRight') colorFontRight: string;
    @Input('colorBackLeft') colorBackLeft: string;
    @Input('colorFontLeft') colorFontLeft: string;
}
