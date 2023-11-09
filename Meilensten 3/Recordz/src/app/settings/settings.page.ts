import {Component, Input, OnInit} from '@angular/core';
import {clearAlbums, IAlbum, subscribeToAlbums} from "../store/albums.store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @Input() dataCount = 0;
  private subscription: Subscription | undefined;

  constructor() {
  }

  ngOnInit() {
    this.subscription = subscribeToAlbums((albums: IAlbum[]) => {
      this.dataCount = albums.length;
    });
  }

  clearStorage() {
    clearAlbums();
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
