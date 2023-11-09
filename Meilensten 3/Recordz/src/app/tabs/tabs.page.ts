import {Component, Input} from '@angular/core';
import {IAlbum, subscribeToAlbums} from "../store/albums.store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @Input() dataCount = 0;
  private subscription: Subscription | undefined;

  constructor() {
  }

  ngOnInit() {
    this.subscription = subscribeToAlbums((albums: IAlbum[]) => {
      this.dataCount = albums.length;
    });
  }

  ngOnDestroy() {
    // Gib das Abonnement frei, wenn die Komponente zerstört wird
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
