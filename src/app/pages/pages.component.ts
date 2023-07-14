import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {

  get modalState() {
    return this.modalService.state.value.modalState;
  }

  get component() {
    return this.modalService.component;
  }

  constructor(private modalService: ModalService) {

  }

}
