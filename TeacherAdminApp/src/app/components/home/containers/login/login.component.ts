import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordComponent } from '../../layouts/forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onOpenModal() {
    const modalRef = this.modalService.open(ForgetPasswordComponent,
      { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
    // If we have some input
    // modalRef.componentInstance.establecimientos = this.establecimientos;
    modalRef.result.then(() => {
    });
  }
}
