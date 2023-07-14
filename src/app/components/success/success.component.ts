import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }


  close() {
    this.modalService.close(true);
  }
}
