import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component'; // Add your Chat component here

@NgModule({
  declarations: [
    AppComponent,   // Root component
    ChatComponent   // Your Chat component
  ],
  imports: [
    BrowserModule,
    FormsModule     // Import FormsModule for two-way data binding in templates
  ],
  providers: [],
  bootstrap: [AppComponent]   // Bootstraps the AppComponent as the root component
})
export class AppModule { }
