import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules:Array<object>;
  totalStudents
  constructor() { 
    this.modules = [
      {
        name:"introducción a Sistemas Multimedia",
        totalStudentsFinished: 16,
      },
      {
        name:"Hardware a Sistemas Multimedia",
        totalStudentsFinished: 5,
      },
      {
        name:"Software a Sistemas Multimedia",
        totalStudentsFinished: 8,
      },
      {
        name:"Telecomunicaciones a Sistemas Multimedia",
        totalStudentsFinished: 14,
      }
    ];
    this.totalStudents = 20;
  }

  ngOnInit() {
  }

}
