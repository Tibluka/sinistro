import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {

  @Output() nextEmitter = new EventEmitter();
  @Output() previousEmitter = new EventEmitter();

  step: number = 1;

  constructor(private router: Router,
    private modalService: ModalService) { }

  ngOnInit(): void {
  }

  next() {
    this.nextEmitter.emit();
  }

  previous() {
    this.previousEmitter.emit();
  }

  cancel() {
    this.router.navigate(['opening'])
  }

  sendDocuments() {
  }
}
