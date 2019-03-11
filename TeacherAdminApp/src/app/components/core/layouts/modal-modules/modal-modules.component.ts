import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-modules',
  templateUrl: './modal-modules.component.html',
  styleUrls: ['./modal-modules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalModulesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;
  formModule: FormGroup;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Agregar módulo'
    };
    this.formModule = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
    }
  }

  onSave() {
    if (this.activeModal) {
      this.activeModal.close(this.formModule.value);
    }
  }

}
