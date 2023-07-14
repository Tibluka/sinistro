import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  detailsForm: FormGroup = new FormGroup({
    totalDias: new FormControl('', Validators.required),
    inicioAfastamento: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    uf: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    acidenteRegistrado: new FormControl(false, Validators.required),
    atendimentoMedico: new FormControl(false, Validators.required),
    description: new FormControl('', Validators.required),
    localAtendimento: new FormControl(''),
    formaAcidenteRegistrado: new FormControl(null)
  })

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
