// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { ChatModule } from './modules/chat.module';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    ChatModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
