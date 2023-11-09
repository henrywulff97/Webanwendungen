import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'room_0');
    this.item$ = collectionData(itemCollection);
    console.log('Data from Firebase:', this.item$);

  }

  ngOnInit() {
  }

}
