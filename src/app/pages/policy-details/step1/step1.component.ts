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
    endereco: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    complemento: new FormControl('', Validators.required),
    numero: new FormControl(null, Validators.required),
  })
  
  step: number = 1;

  uf = [new CustomOption(false, 'SP', 'sp', '')];
  cidade = [new CustomOption(false, 'São José do Rio Preto' , 'sjrp', '')];

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
