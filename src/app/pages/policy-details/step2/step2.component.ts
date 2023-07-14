import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {

  @Output() nextEmitter = new EventEmitter();
  @Output() previousEmitter = new EventEmitter();

  step: number = 2;

  totalDias: string = '';
  inicioAfastamento: string = '';
  cidade: string = '';
  uf: string = '';
  pais: string = '';
  acidenteRegistrado: boolean = false;
  atendimentoMedico: boolean = false;

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
