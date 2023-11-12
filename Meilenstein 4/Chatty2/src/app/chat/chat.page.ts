import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Firestore, collectionData, collection, Timestamp, addDoc, orderBy, query} from '@angular/fire/firestore';
import {IonContent} from "@ionic/angular";

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
    collectionData(query(collection(this.firestore, 'room_0'), orderBy('timestamp', 'asc'))).subscribe((data: any[]) => {
      this.messages = data.map(message => {
        if (!this.authorColors[message.author]) {
          this.authorColors[message.author] = this.getRandomColor();
        }
        return message;
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
        await addDoc(collection(this.firestore, 'room_0'), {
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
