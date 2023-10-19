import {Component} from '@angular/core';

@Component({
  selector: 'app-yourrecords',
  templateUrl: './yourrecords.component.html',
  styleUrls: ['./yourrecords.component.scss']
})
export class YourrecordsComponent {
  records: any = [];
  newRecord: any = {};

  constructor() {
    if (localStorage.getItem("records")) {
      this.records = JSON.parse(localStorage.getItem("records") as string);
    }
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    localStorage.setItem("records", JSON.stringify(this.records));
  }

  addRecord() {
    this.records.push(this.newRecord);
    this.newRecord = {};
    localStorage.setItem("records", JSON.stringify(this.records));
  }

  resetToDefault(){
    localStorage.removeItem("records");
  }
}
