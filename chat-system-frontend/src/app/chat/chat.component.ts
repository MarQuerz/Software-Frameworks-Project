import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message = '';
  messages: string[] = [];
  room = 'general';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.joinRoom(this.room);
    this.socketService.onMessage((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.room, this.message);
      this.message = '';
    }
  }
}
