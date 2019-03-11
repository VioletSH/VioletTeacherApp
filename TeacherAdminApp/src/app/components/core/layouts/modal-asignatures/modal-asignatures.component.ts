import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-asignatures',
  templateUrl: './modal-asignatures.component.html',
  styleUrls: ['./modal-asignatures.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAsignaturesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;
  formAsignature: FormGroup;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Editar módulo'
    };
    this.formAsignature = this.formBuilder.group({
      title: ['', Validators.required],
      career: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
    }
  }

  onSave() {
    if (this.activeModal) {
      this.activeModal.close(this.formAsignature.value);
    }
  }

}
