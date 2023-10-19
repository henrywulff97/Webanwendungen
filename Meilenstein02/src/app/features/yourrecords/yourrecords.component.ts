import { Component } from '@angular/core';

@Component({
  selector: 'app-yourrecords',
  templateUrl: './yourrecords.component.html',
  styleUrls: ['./yourrecords.component.scss']
})
export class YourrecordsComponent {
  records = [
    {
      albumName: "Peripheral Vision",
      artist: "Turnover",
      version: "First Print",
      releaseDate: "19.07.1997",
      recordLabel: "Fueled by Ramen"
    },
    {
      albumName: "Why Would I Watch",
      artist: "Hot Mulligan",
      version: "First Print",
      releaseDate: "19.07.1997",
      recordLabel: "Fueled by Ramen"
    },
    {
      albumName: "Vessel",
      artist: "Twenty One Pilots",
      version: "First Print",
      releaseDate: "19.07.1997",
      recordLabel: "Fueled by Ramen"
    },
    {
      albumName: "Blue In The Dark",
      artist: "Bearings",
      version: "First Print",
      releaseDate: "19.07.1997",
      recordLabel: "Fueled by Ramen"
    },
    {
      albumName: "Tickets To My Downfall",
      artist: "Machine Gun Kelly",
      version: "First Print",
      releaseDate: "19.07.1997",
      recordLabel: "Fueled by Ramen"
    }
  ]
}
