import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:5000');

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  getMessages() {
    return new Observable(observer => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}
