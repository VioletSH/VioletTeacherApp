import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGenericoModel } from '../../models/modal.model';

@Component({
	selector: 'app-modal-generico',
	templateUrl: './modal-generico.component.html',
	styleUrls: ['./modal-generico.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalGenericoComponent implements OnInit {
	@Input()
	modelo: ModalGenericoModel;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
	}

}
