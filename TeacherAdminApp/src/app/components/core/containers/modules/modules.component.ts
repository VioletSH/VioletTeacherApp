import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalModulesComponent } from '../../layouts/modal-modules/modal-modules.component';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  modules:Array<object>;

  totalStudents;

    constructor(private modalService: NgbModal) { 
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
  
    onOpenModal() {
      const modalRef = this.modalService.open(ModalModulesComponent,
        { centered: true, size: 'lg' });
      // If we have some input
      // modalRef.componentInstance.establecimientos = this.establecimientos;
      modalRef.result.then((formAnswer:any) => {
        if (formAnswer){
          this.modules.push({name: formAnswer.title, totalStudentsFinished: 0});
        }
      });
    }

}
