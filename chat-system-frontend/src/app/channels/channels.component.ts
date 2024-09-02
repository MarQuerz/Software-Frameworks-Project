import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { Channel } from '../models/channel.model';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: Channel[] = [];

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    this.loadChannels('groupId'); // Replace 'groupId' with actual group ID
  }

  loadChannels(groupId: string): void {
    this.channelService.getChannels(groupId).subscribe(channels => this.channels = channels);
  }

  createChannel(name: string, groupId: string): void {
    const newChannel: Channel = { id: '', name, groupId };
    this.channelService.createChannel(newChannel).subscribe(channel => this.channels.push(channel));
  }

  deleteChannel(id: string): void {
    this.channelService.deleteChannel(id).subscribe(() => {
      this.channels = this.channels.filter(channel => channel.id !== id);
    });
  }
}
