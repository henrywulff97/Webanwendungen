import {Component, Input, OnInit} from '@angular/core';
import {addAlbum, IAlbum, removeAlbum, subscribeToAlbums} from '../store/albums.store';
import {Subscription} from "rxjs";
import {add} from "ionicons/icons";


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  @Input() items = Array<IAlbum>()
  private subscription: Subscription | undefined;

  constructor() {
  }

  ngOnInit() {
    this.subscription = subscribeToAlbums((albums: IAlbum[]) => {
      this.items = albums;
    });
  }

  ngOnDestroy() {
    // Gib das Abonnement frei, wenn die Komponente zerstört wird
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  removeItem(id: string) {
    // ToDo: Ask for confirmation
    removeAlbum(id);
  }

  addItem() {
    addAlbum({
      albumName: 'New Album',
      artist: 'New Artist',
      version: 'New Version',
      releaseDate: 'New Release Date',
      recordLabel: 'New Record Label',
    });
  }

  protected readonly add = add;
}
