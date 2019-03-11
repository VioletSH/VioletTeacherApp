import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-modules',
  templateUrl: './modal-modules.component.html',
  styleUrls: ['./modal-modules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalModulesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Editar módulo'
    };
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
      }
  }

}
