import {Component} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [NgbDatepickerModule],
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public activeModal: NgbActiveModal) {
  }
}
