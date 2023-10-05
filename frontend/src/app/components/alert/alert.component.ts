import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() message!: string;
  @Input() type!: string;
  constructor(private bsModalRef: BsModalRef) {}
  onClose() {
    this.bsModalRef.hide();
  }
}
