import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterBeneficiaryComponent } from 'src/app/components/register-beneficiary/register-beneficiary.component';
import { SendDocumentsDeathComponent } from 'src/app/components/send-documents-death/send-documents-death.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-declaration-heirs',
  templateUrl: './declaration-heirs.component.html',
  styleUrls: ['./declaration-heirs.component.scss']
})
export class DeclarationHeirsComponent {

  constructor(private router: Router,
    private modalService: ModalService) { }

  ngOnInit(): void {
  }

  backTo() {
    this.router.navigate(['death-policy-details'])
  }

  sendDeclaration() {
    this.modalService.open(SendDocumentsDeathComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  
  registerBeneficiary() {
    this.modalService.open(RegisterBeneficiaryComponent)
  }
  
}
