import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalGenericoModel } from 'src/app/shared/models/modal.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-activities',
  templateUrl: './modal-activities.component.html',
  styleUrls: ['./modal-activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalActivitiesComponent implements OnInit {

  modalGenerico: ModalGenericoModel;
  resources:Array<object>;
  formActivities: FormGroup;

  constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) { 
    this.resources = [
      {name : 'Recurso 1', type : 0},
      {name : 'Recurso 2', type : 1},
      {name : 'Recurso 3', type : 2},
      {name : 'Recurso 4', type : 3},
      {name : 'Recurso 5', type : 0},
      {name : 'Recurso 1', type : 0},
      {name : 'Recurso 2', type : 1},
      {name : 'Recurso 3', type : 2},
      {name : 'Recurso 4', type : 3},
      {name : 'Recurso 1', type : 0},
      {name : 'Recurso 2', type : 1},
      {name : 'Recurso 3', type : 2},
      {name : 'Recurso 4', type : 3}
    ];
  }

  ngOnInit() {
    this.modalGenerico = {
      titulo: 'Agregar actividad'
    };
    this.formActivities = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      assistant: [''],
      duration: [''],
      maxnote: [''],
      resource: ['']
    });
  }

  confirm(): void {
    if (this.activeModal) {
      this.activeModal.close();
    }
  }

  onSave() {
    if (this.activeModal) {
      this.activeModal.close(this.formActivities.value);
    }
  }

}
