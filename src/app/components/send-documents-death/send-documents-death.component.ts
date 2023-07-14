import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-send-documents-death',
  templateUrl: './send-documents-death.component.html',
  styleUrls: ['./send-documents-death.component.scss']
})
export class SendDocumentsDeathComponent {


  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  next() {
  }

  previous() {
  }

  close() {
    this.modalService.close(true);
  }
}
