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
  isSaving: boolean = false;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    console.log('Album input:', this.album);
    this.editableAlbum = this.album ? JSON.parse(JSON.stringify(this.album)) : {
      albumName: '',
      artist: '',
      version: '',
      releaseDate: '',
      recordLabel: '',
    };
    console.log('Editable album after init:', this.editableAlbum);
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

  async save() {
    this.isSaving = true;

    // Check if editableAlbum is defined
    if (!this.editableAlbum) {
      // Handle the undefined album case
      console.error('No album data to save.');
      this.isSaving = false;
      return;
    }

    try {
      if (this.editableAlbum.id) {
        // If an album ID exists, update the existing album
        updateAlbum(this.editableAlbum.id, this.editableAlbum);
      } else {
        // If no album ID exists, add a new album
        const newAlbum: Omit<IAlbum, 'id'> = {
          albumName: this.editableAlbum.albumName || '',
          artist: this.editableAlbum.artist || '',
          version: this.editableAlbum.version || '',
          releaseDate: this.editableAlbum.releaseDate || '',
          recordLabel: this.editableAlbum.recordLabel || '',
        };
        addAlbum(newAlbum);
      }

      // If the operations are successful, dismiss the modal and pass the updated data back
      await this.modalCtrl.dismiss(this.editableAlbum, 'save');
    } catch (error) {
      // Handle any errors that occur during the save process
      console.error('Failed to save album data:', error);
      // Optionally, display an error message to the user
    } finally {
      // Reset the saving indicator
      this.isSaving = false;
    }
  }
}
