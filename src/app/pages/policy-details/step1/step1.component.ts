import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {

  @Output() nextEmitter = new EventEmitter();

  profissao: string = '';
  telefone: string = '';
  email: string = '';
  possuiEnderecoComercial: boolean = true;
  banco: string = '';
  agencia: string = '';
  conta: string = '';
  tipoConta: string = '';
  cep: string = '';
  endereco: string = '';
  bairro: string = '';
  complemento: string = '';
  numero: string = '';
  step: number = 1;


  uf = [new CustomOption(false, 'SP', 'SP')];
  cidade = [new CustomOption(false, 'São José do Rio Preto', 'SJRP')];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    this.nextEmitter.emit();
  }

  cancel() {
    this.router.navigate(['opening'])
  }

  
  optionSelected(customOption: CustomOption) {
    console.log(customOption);

  }

}
