import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() component: any = null;

  get transition() {
    return this.modalService.transition;
  }

  get modalContent() {
    return this.modalService.modalContent;
  }

  constructor(private modalService: ModalService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.setTransition(true)
    }, 1);
  }

  close() {
    if (this.transition) {
      this.modalService.close(false);
    }
  }

}
