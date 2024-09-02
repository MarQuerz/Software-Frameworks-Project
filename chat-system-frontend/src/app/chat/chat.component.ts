import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  message: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.messages.subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}