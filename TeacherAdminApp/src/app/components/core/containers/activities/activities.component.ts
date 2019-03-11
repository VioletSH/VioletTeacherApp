import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalActivitiesComponent } from '../../layouts/modal-activities/modal-activities.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {


  resources: Array<object>;
  students: Array<object>;
  activities: Array<object>;


  constructor(private modalService: NgbModal) { 
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

    this.students = [
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

    this.activities = [
      {name : 'Actividad 1', title : '¿Qué es un Software?'},
      {name : 'Actividad 2', title : '¿Qué es un Hardware?'},
      {name : 'Actividad 3', title : '¿Telecomunicación?'}
    ];
  
  }
  

  ngOnInit() {
  }

  onOpenModal() {
    const modalRef = this.modalService.open(ModalActivitiesComponent,
      { centered: true, size: 'lg' });
    // If we have some input
    // modalRef.componentInstance.establecimientos = this.establecimientos;
    modalRef.result.then((formAnswer:any) => {
      if (formAnswer){
        this.activities.push({name: formAnswer.title, title: formAnswer.description});
      }
    });
  }

}
