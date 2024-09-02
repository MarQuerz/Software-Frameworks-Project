import { Injectable } from '@angular/core';
import Peer from 'peerjs';

@Injectable({
  providedIn: 'root',
})
export class PeerService {
  private peer: Peer;

  constructor() {
    this.peer = new Peer({
      host: 'localhost',
      port: 5000,
      path: '/peerjs',
    });
  }

  getId(callback: (id: string) => void) {
    this.peer.on('open', callback);
  }

  connectToPeer(peerId: string) {
    return this.peer.connect(peerId);
  }

  onCall(callback: (call: any) => void) {
    this.peer.on('call', callback);
  }

  callPeer(peerId: string, stream: MediaStream) {
    return this.peer.call(peerId, stream);
  }
}
