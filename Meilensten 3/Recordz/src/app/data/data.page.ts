import {Component, Input, OnInit} from '@angular/core';
import {addAlbum, IAlbum, removeAlbum, subscribeToAlbums} from '../store/albums.store';
import { Subscription} from "rxjs";
import {add} from "ionicons/icons";

import {ModalController} from "@ionic/angular";
import {EditAlbumModalComponent} from "../edit-album-modal/edit-album-modal.component";


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  @Input() items = Array<IAlbum>()
  private subscription: Subscription | undefined;

  constructor(private modalCtrl: ModalController) {
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

  async openEditModal(albumToEdit: IAlbum) {
    const modal = await this.modalCtrl.create({
      component: EditAlbumModalComponent,
      componentProps: {album: albumToEdit} // Übergebe das zu bearbeitende Album
    });

    await modal.present();

    const {data, role} = await modal.onDidDismiss();
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: EditAlbumModalComponent,
      componentProps: {album: undefined} // Übergebe das zu bearbeitende Album
    });

    await modal.present();

    const {data, role} = await modal.onDidDismiss();
  }

  protected readonly add = add;
}
