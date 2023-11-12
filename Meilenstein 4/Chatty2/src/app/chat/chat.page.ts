import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {Firestore, collectionData, collection, Timestamp, DocumentData} from '@angular/fire/firestore';

interface IMessage {
  text: string;
  timestamp: Timestamp;
  author: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: IMessage[] = [];

  constructor(firestore: Firestore) {
    // room_0
    collectionData(collection(firestore, 'room_0')).subscribe((data: any[]) => {
      this.messages = data;
    });
  }

  ngOnInit() {
  }

}
