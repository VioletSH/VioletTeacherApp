import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalActivitiesComponent } from '../../layouts/modal-activities/modal-activities.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

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
