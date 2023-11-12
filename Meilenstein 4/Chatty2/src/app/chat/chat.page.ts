import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {
  Firestore,
  onSnapshot,
  collection,
  serverTimestamp,
  addDoc,
  orderBy,
  query, Timestamp
} from '@angular/fire/firestore';
import {IonContent} from "@ionic/angular";
import {Storage} from "@ionic/storage-angular";


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
  @ViewChild(IonContent, {static: false}) content!: IonContent;
  private firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);
  messages: IMessage[] = [];
  newMessage: string = '';
  username: string | undefined;
  authorColors: { [author: string]: string } = {};
  loading: boolean = true

  constructor() {
    onSnapshot(query(collection(this.firestore, 'room_1'), orderBy('timestamp', 'asc')), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const message = change.doc.data() as IMessage;
          if (!this.authorColors[message.author]) {
            this.authorColors[message.author] = this.getRandomColor();
          }
          this.messages.push(message);
        }
      });

      this.loading = false;
      this.scrollToBottom();
    });
  }


  scrollToBottom() {
    setTimeout(async () => {
      await this.content.scrollToBottom(300);
    }, 300);
  }

  async ngOnInit() {
    await this.storage.create();
    this.storage.get('savedContent').then((value) => {
      this.username = value || '';
    });
  }

  async sendMessage() {
    this.loading = true;
    await this.storage.get('savedContent').then((value) => {
      this.username = value || '';
    });
    if (this.newMessage.trim()) {
      try {
        await addDoc(collection(this.firestore, 'room_1'), {
          text: this.newMessage.trim(),
          timestamp: serverTimestamp(),
          author: this.username
        });
        this.newMessage = '';
      } catch (error) {
        console.error("Error sending message: ", error);
      } finally {
        this.loading = false;
      }
    }
  }

  getColorForAuthor(author: string): string {
    if (!this.authorColors[author]) {
      this.authorColors[author] = this.getRandomColor();
    }
    return this.authorColors[author];
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
