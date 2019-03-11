import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAsignaturesComponent } from '../../layouts/modal-asignatures/modal-asignatures.component';

@Component({
  selector: 'app-asignatures',
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.css']
})
export class AsignaturesComponent implements OnInit {

  asignatures:Array<object>;

  constructor(private modalService: NgbModal) { 
    this.asignatures = [
      {
        name:"Arquitectura de Sistemas Multimedia",
        career: "Ingeniería Multimedia",
        totalStudents: 20,
        group:1
      },
      {
        name:"Arquitectura de Sistemas Multimedia",
        career: "Ingeniería Multimedia",
        totalStudents: 16,
        group:2
      },
      {
        name:"Video y Televisión Digital",
        career: "Ingeniería Multimedia",
        totalStudents: 20,
        group:1
      },
    ]
  }

  ngOnInit() {
  }

  onOpenModal() {
    const modalRef = this.modalService.open(ModalAsignaturesComponent,
      { centered: true, size: 'lg' });
    // If we have some input
    // modalRef.componentInstance.establecimientos = this.establecimientos;
    modalRef.result.then((formAnswer:any) => {
      if (formAnswer){
        this.asignatures.push({name: formAnswer.title, career: formAnswer.career,
          group: formAnswer.group, totalStudents: 0});
      }
    });
  }

}
