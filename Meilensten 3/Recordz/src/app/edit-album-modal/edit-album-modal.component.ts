import {Component, Input, OnInit} from '@angular/core';
import {addAlbum, IAlbum, updateAlbum} from '../store/albums.store';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-edit-album-modal',
  templateUrl: './edit-album-modal.component.html',
  styleUrls: ['./edit-album-modal.component.scss'],
})
export class EditAlbumModalComponent implements OnInit {
  @Input() album: Partial<IAlbum> | undefined;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    if (this.album)
      this.album = {
        albumName: '',
        artist: '',
        version: '',
        releaseDate: '',
        recordLabel: '',
      };
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  save() {
    if (!this.album) return;
    if (this.album.id) updateAlbum(this.album.id, this.album);
    else {
      const newAlbum: Omit<IAlbum, 'id'> = {
        albumName: this.album.albumName || '',
        artist: this.album.artist || '',
        version: this.album.version || '',
        releaseDate: this.album.releaseDate || '',
        recordLabel: this.album.recordLabel || '',
      };
      addAlbum(newAlbum);
    }
    // check if album has an id
    this.modalCtrl.dismiss(this.album, 'save');
  }
}
