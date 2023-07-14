import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {

  @Output() nextEmitter = new EventEmitter();
  @Output() previousEmitter = new EventEmitter();

  step: number = 1;

  constructor(private router: Router) { }

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
}
