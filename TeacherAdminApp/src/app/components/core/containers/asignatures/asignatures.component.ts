import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignatures',
  templateUrl: './asignatures.component.html',
  styleUrls: ['./asignatures.component.css']
})
export class AsignaturesComponent implements OnInit {

  asignatures:Array<object>;
  constructor() { 
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

}
