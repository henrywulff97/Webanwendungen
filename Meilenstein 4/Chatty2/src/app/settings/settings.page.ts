import {Component, inject, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage-angular';
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
    const messagesRef = collection(this.firestore, 'room_1');
    const querySnapshot = await getDocs(messagesRef);

    const usernameExists = querySnapshot.docs.some(doc => {
      const message = doc.data() as IMessage;
      return message.author === this.username;
    });

    if (usernameExists) {
      alert('Username already in use');
    } else {
      await this.storage.set('savedContent', this.username);
      // Inform the user
      alert('Username saved');
    }
  }
}
