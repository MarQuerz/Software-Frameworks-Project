import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private apiUrl = 'http://localhost:5000/api/channels'; // Adjust the API URL

  constructor(private http: HttpClient) {}

  getChannels(groupId: string): Observable<Channel[]> {
    return this.http.get<Channel[]>(`${this.apiUrl}?groupId=${groupId}`);
  }

  createChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(this.apiUrl, channel);
  }

  updateChannel(id: string, channel: Channel): Observable<Channel> {
    return this.http.put<Channel>(`${this.apiUrl}/${id}`, channel);
  }

  deleteChannel(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
