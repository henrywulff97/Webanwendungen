import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import {EditAlbumModalComponentModule} from "../edit-album-modal/edit-album-modal.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule,
    EditAlbumModalComponentModule
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
