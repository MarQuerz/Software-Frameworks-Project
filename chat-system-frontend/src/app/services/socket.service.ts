import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: any;
  private readonly uri: string = 'http://localhost:5000';  // Backend URL

  constructor() {
    this.socket = io(this.uri);
  }

  joinRoom(room: string) {
    this.socket.emit('joinRoom', { room });
  }

  sendMessage(room: string, message: string) {
    this.socket.emit('chatMessage', { room, message });
  }

  onMessage(callback: (message: any) => void) {
    this.socket.on('chatMessage', callback);
  }
}
