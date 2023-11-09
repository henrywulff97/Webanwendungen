import {NgModule} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EditAlbumModalComponent} from "./edit-album-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [EditAlbumModalComponent],
  exports: [EditAlbumModalComponent]
})
export class EditAlbumModalComponentModule {}
