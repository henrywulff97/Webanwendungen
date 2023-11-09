import {Component, OnInit} from '@angular/core';

interface itemData {
  albumName: string;
  artist: string;
  version: string;
  releaseDate: string;
  recordLabel: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  items: itemData[] = [
    {
      albumName: 'Album 1',
      artist: 'Artist 1',
      version: '1.0',
      releaseDate: '2023-01-01',
      recordLabel: 'Label 1'
    },
    {
      albumName: 'Album 2',
      artist: 'Artist 2',
      version: '1.0',
      releaseDate: '2023-01-02',
      recordLabel: 'Label 2'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
