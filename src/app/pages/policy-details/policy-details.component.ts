import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent {

  profissao: string = '';
  telefone: string = '';
  email: string = '';
  possuiEnderecoComercial: boolean = true;
  banco: string = '';
  agencia: string = '';
  conta: string = '';
  tipoConta: string = '';
  step: number = 1;
  nextStep: number = null;
  previousStep: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.step == 3) {
      return
    } else this.step += 1;

  }

  previous() {
    this.step -= 1;  }

  checkStep() {
    this.nextStep = this.step + 1;
    this.previousStep = this.step - 1;
    if (this.step == 1) {
      return 'step1'
    } else if (this.nextStep == 3) {
      return 'step2'
    } else return 'step3'
  }

}
