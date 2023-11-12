import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {
  Firestore,
  collectionData,
  onSnapshot,
  collection,
  Timestamp,
  addDoc,
  orderBy,
  query, deleteDoc, doc, getDocs
} from '@angular/fire/firestore';
import {IonContent} from "@ionic/angular";
import {environment} from "../../environments/environment";


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
  messages: IMessage[] = [];
  newMessage: string = '';
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

  ngOnInit() {
  }

  async sendMessage() {
    this.loading = true;
    if (this.newMessage.trim()) {
      try {
        await addDoc(collection(this.firestore, 'room_1'), {
          text: this.newMessage.trim(),
          timestamp: Timestamp.now(),
          author: 'user'
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
