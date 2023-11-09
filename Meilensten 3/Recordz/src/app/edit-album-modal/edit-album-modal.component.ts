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
  editableAlbum: Partial<IAlbum> | undefined;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.editableAlbum = this.album ? JSON.parse(JSON.stringify(this.album)) : undefined;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  isDisabled() {
    if (this.editableAlbum)
      return this.editableAlbum.albumName === '' ||
        this.editableAlbum.artist === '' ||
        this.editableAlbum.version === '' ||
        this.editableAlbum.releaseDate === '' ||
        this.editableAlbum.recordLabel === '';
    return true;
  }

  save() {
    if (!this.editableAlbum) return;
    if (this.editableAlbum.id) {
      updateAlbum(this.editableAlbum.id, this.editableAlbum);
    } else {
      const newAlbum: Omit<IAlbum, 'id'> = {
        albumName: this.editableAlbum.albumName || '',
        artist: this.editableAlbum.artist || '',
        version: this.editableAlbum.version || '',
        releaseDate: this.editableAlbum.releaseDate || '',
        recordLabel: this.editableAlbum.recordLabel || '',
      };
      addAlbum(newAlbum);
    }
    this.modalCtrl.dismiss(this.editableAlbum, 'save');
  }
}
