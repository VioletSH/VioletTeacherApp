import { Component, OnInit } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-activities',
  templateUrl: './modal-activities.component.html',
  styleUrls: ['./modal-activities.component.css']
})
export class ModalActivitiesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Editar actividad'
    };
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
      }
  }

}
