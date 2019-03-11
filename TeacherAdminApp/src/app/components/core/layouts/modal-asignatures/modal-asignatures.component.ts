import { Component, OnInit } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-asignatures',
  templateUrl: './modal-asignatures.component.html',
  styleUrls: ['./modal-asignatures.component.css']
})
export class ModalAsignaturesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Editar asignatura'
    };
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
      }
  }

}
