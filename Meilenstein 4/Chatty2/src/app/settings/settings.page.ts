import {Component, inject, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {collection, collectionData, doc, Firestore, getDocs, orderBy, query, Timestamp} from "@angular/fire/firestore";

interface IMessage {
  text: string;
  timestamp: Timestamp;
  author: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  username: string | undefined;
  private firestore: Firestore = inject(Firestore);
  constructor(private storage: Storage) {

  }

  async ngOnInit() {
    await this.storage.create();
    this.storage.get('savedContent').then((value) => {
      this.username = value || '';
    });
  }

  async save() {
    await this.storage.create();

    const db = collection(this.firestore, 'room_0');
    const data = getDocs(db);
    console.log(data);
    (await data).forEach(doc => {
      const message = doc.data() as IMessage;

      if (message.author === this.username) {
        alert('Username already in use');
        return false;
      }
      else {
        this.storage.set('savedContent', this.username);
      }
    });
  }
}
