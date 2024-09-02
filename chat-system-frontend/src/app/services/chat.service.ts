import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any;
  public messages = new Subject<string>();

  constructor() {
    this.socket = io('http://localhost:5000'); // Adjust URL as needed
    this.socket.on('message', (message: string) => {
      this.messages.next(message);
    });
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
}
