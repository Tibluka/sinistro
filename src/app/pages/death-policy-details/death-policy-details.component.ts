import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SendDocumentsDeathComponent } from 'src/app/components/send-documents-death/send-documents-death.component';
import { ModalService } from 'src/app/services/modal.service';
import { DeclarationHeirsComponent } from '../declaration-heirs/declaration-heirs.component';
import { RegisterBeneficiaryComponent } from 'src/app/components/register-beneficiary/register-beneficiary.component';
import { SuccessComponent } from 'src/app/components/success/success.component';

@Component({
  selector: 'app-death-policy-details',
  templateUrl: './death-policy-details.component.html',
  styleUrls: ['./death-policy-details.component.scss']
})
export class DeathPolicyDetailsComponent {
  @Output() nextEmitter = new EventEmitter();

  profissao: string = '';
  telefone: string = '';
  email: string = '';
  possuiEnderecoComercial: boolean = true;
  banco: string = '';
  agencia: string = '';
  conta: string = '';
  tipoConta: string = '';


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

  sendDeclaration() {
    this.router.navigate(['/declaration-heirs'])
  }
}
