import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {

  @Output() nextEmitter = new EventEmitter();
  @Output() previousEmitter = new EventEmitter();

  step: number = 2;

  constructor(private router: Router) { }

  detailsForm: FormGroup = new FormGroup({
    totalDias: new FormControl('', Validators.required),
    inicioAfastamento: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    acidenteRegistrado: new FormControl(false, Validators.required),
    atendimentoMedico: new FormControl(false, Validators.required),
    description: new FormControl('', Validators.required),
    localAtendimento: new FormControl('', Validators.required),
    formaAcidenteRegistrado: new FormControl(null, Validators.required)
  })

  paisOptions: Array<CustomOption> = [
    new CustomOption(false, 'Brasil', 'brasil', 'pais'),
  ];
  ufOptions: Array<CustomOption> = [
    new CustomOption(false, 'SP', 'sp', 'uf'),
  ];
  cidadeOptions: Array<CustomOption> = [
    new CustomOption(false, 'São José do Rio Preto', 'sp', 'cidade'),
  ];

  ngOnInit(): void {
    this.getAcidenteRegistrado();
    this.getAtendimentoMedico();
  }

  next() {
    if (this.detailsForm.invalid) {
      alert('Formulário inválido.')
    } else this.nextEmitter.emit();
  }

  previous() {
    this.previousEmitter.emit();
  }

  cancel() {
    this.router.navigate(['opening'])
  }

  getAcidenteRegistrado() {
    if(this.detailsForm.get('acidenteRegistrado').value == false) {
      this.detailsForm.get('formaAcidenteRegistrado').disable();      
    } else {
      this.detailsForm.get('formaAcidenteRegistrado').enable();      
    }
  }

  getAtendimentoMedico() {
    if(this.detailsForm.get('atendimentoMedico').value == false) {
      this.detailsForm.get('localAtendimento').disable();      
    } else {
      this.detailsForm.get('localAtendimento').enable();      
    }
  }

  updateForm(customOption: CustomOption) {
    this.detailsForm.get(customOption.formControlName).setValue(customOption.value);
  }
}
