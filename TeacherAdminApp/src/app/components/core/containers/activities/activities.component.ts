import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalActivitiesComponent } from '../../layouts/modal-activities/modal-activities.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {


  recursos: Array<any>;
  estudiantes: Array<any>;


  constructor(private modalService: NgbModal) { 
    this.recursos = [
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

    this.estudiantes = [
      {name : 'Estudiante 1'},
      {name : 'Estudiante 2'},
      {name : 'Estudiante 3'},
      {name : 'Estudiante 4'},
      {name : 'Estudiante 5'},
      {name : 'Estudiante 1'},
      {name : 'Estudiante 2'},
      {name : 'Estudiante 3'},
      {name : 'Estudiante 4'},
      {name : 'Estudiante 1'},
      {name : 'Estudiante 2'},
      {name : 'Estudiante 3'},
      {name : 'Estudiante 4'}
    ];
  
  }
  

  ngOnInit() {
  }

  onOpenModal() {
    const modalRef = this.modalService.open(ModalActivitiesComponent,
      { centered: true, size: 'lg' });
    // If we have some input
    // modalRef.componentInstance.establecimientos = this.establecimientos;
    modalRef.result.then(() => {
    });
  }

}
