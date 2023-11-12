import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  username: string | undefined;
  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    this.storage.get('savedContent').then((value) => {
      this.username = value || '';
    });
  }

  async save() {
    await this.storage.create();

    this.storage.set('username', this.username);
  }
}
