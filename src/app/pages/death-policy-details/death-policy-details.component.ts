import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendDocumentsDeathComponent } from 'src/app/components/send-documents-death/send-documents-death.component';
import { SuccessComponent } from 'src/app/components/success/success.component';
import { CustomOption } from 'src/app/models/customOption';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-death-policy-details',
  templateUrl: './death-policy-details.component.html',
  styleUrls: ['./death-policy-details.component.scss']
})
export class DeathPolicyDetailsComponent {
  @Output() nextEmitter = new EventEmitter();

  deathForm: FormGroup = new FormGroup({
    profissao: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    possuiEnderecoComercial: new FormControl(false, Validators.required),
    banco: new FormControl('', Validators.required),
    agencia: new FormControl('', Validators.required),
    conta: new FormControl('', Validators.required),
    tipoConta: new FormControl('', Validators.required),
    inicioAfastamento: new FormControl('', Validators.required),
    fimAfastamento: new FormControl('', Validators.required),
    sinistradoAposentado: new FormControl(false),
    sinistradoAfastado: new FormControl(false),
    motivoAposentadoria: new FormControl('', Validators.required),
    motivoAfastamento: new FormControl('', Validators.required),
    aposentadoDesde: new FormControl('', Validators.required),
    tempoServico: new FormControl('', Validators.required),

  })

  tempoServicoOptions: Array<CustomOption> = [
    new CustomOption(false, '35 anos', '35', 'tempoServico'),
  ];
  motivoAposentadoriaOptions: Array<CustomOption> = [
    new CustomOption(false, 'Tempo de serviço', 'tempo', 'motivoAposentadoria'),
  ];
  motivoAfastamentoOptions: Array<CustomOption> = [
    new CustomOption(false, 'Acidente', 'acidente', 'motivoAfastamento'),
  ];

  constructor(private router: Router,
    private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openSinistry() {
    this.modalService.open(SuccessComponent)
  }

  cancel() {
    this.router.navigate(['opening'])
  }

  sendDocumentsDeatch() {
    this.modalService.open(SendDocumentsDeathComponent)
  }

  sendDocumentsBeneficiary() {
    this.modalService.open(SendDocumentsDeathComponent)
  }
  sendDeclaration() {
    this.router.navigate(['/declaration-heirs'])
  }

  updateForm(customOption: CustomOption) {
    this.deathForm.get(customOption.formControlName).setValue(customOption.value);
  }
}
