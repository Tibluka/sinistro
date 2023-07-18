import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {

  @Output() nextEmitter = new EventEmitter();

  acidenteForm: FormGroup = new FormGroup({
    profissao: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    possuiEnderecoComercial: new FormControl(false, Validators.required),
    seguradoDesempregado: new FormControl(false),
    banco: new FormControl('', Validators.required),
    agencia: new FormControl('', Validators.required),
    conta: new FormControl('', Validators.required),
    tipoConta: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    complemento: new FormControl(''),
    numero: new FormControl(null, Validators.required),
  })

  step: number = 1;


  ufOptions: Array<CustomOption> = [
    new CustomOption(false, 'SP', 'sp', 'uf'),
  ];
  cidadeOptions: Array<CustomOption> = [
    new CustomOption(false, 'São José do Rio Preto', 'sp', 'cidade'),
  ];
  bancoOptions: Array<CustomOption> = [
    new CustomOption(false, '077 - Inter', 'inter', 'banco'),
  ];
  tipoContaOptions: Array<CustomOption> = [
    new CustomOption(false, 'Conta Corrente', 'inter', 'tipoConta'),
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getEnderecoComercial();
  }

  next() {
    if (this.acidenteForm.invalid) {
      alert('Formulário inválido.')
    } else this.nextEmitter.emit();
  }

  getEnderecoComercial() {
    if(this.acidenteForm.get('possuiEnderecoComercial').value == false) {
      this.acidenteForm.get('cep').disable();      
      this.acidenteForm.get('cidade').disable();
      this.acidenteForm.get('endereco').disable();
      this.acidenteForm.get('bairro').disable();
      this.acidenteForm.get('complemento').disable();
      this.acidenteForm.get('numero').disable();
    } else {
      this.acidenteForm.get('cep').enable();      
      this.acidenteForm.get('cidade').enable();
      this.acidenteForm.get('endereco').enable();
      this.acidenteForm.get('bairro').enable();
      this.acidenteForm.get('complemento').enable();
      this.acidenteForm.get('numero').enable();
    }
  }

  cancel() {
    this.router.navigate(['opening'])
  }

  updateForm(customOption: CustomOption) {
    this.acidenteForm.get(customOption.formControlName).setValue(customOption.value);
  }

}
