import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private modalService: BsModalService) {}

  showAlert(message: string, type: string, dismissTimeOut?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
    bsModalRef.setClass('modal-sm');

    if (dismissTimeOut) {
      setTimeout(() => {
        bsModalRef.hide();
      }, dismissTimeOut);
    }
  }
}
