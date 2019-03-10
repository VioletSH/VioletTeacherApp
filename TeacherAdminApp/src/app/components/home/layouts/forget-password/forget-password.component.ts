import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgetPasswordComponent implements OnInit {

  modalGenerico: ModalGenericoModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Contraseña Olvidada'
    };
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
      }
  }

}
