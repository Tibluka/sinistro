import { Component } from '@angular/core';
import { CustomOption } from 'src/app/models/customOption';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register-beneficiary',
  templateUrl: './register-beneficiary.component.html',
  styleUrls: ['./register-beneficiary.component.scss']
})
export class RegisterBeneficiaryComponent {

  nomeCompleto: string = '';
  cpfCnpj: string = '';
  dataDeNascimento: string = '';
  telefone: string = '';
  email: string = '';
  agencia: string = '';
  conta: string = '';

  options = [new CustomOption(false, 'Filho', 'filho', '')];
  options2 = [new CustomOption(false, 'Conta Corrente', 'conta_corrente', '')];
  options3 = [new CustomOption(false, '077 - Inter', 'inter', '')]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close(true);
  }

  registerBeneficiary() {

  }

  optionSelected(customOption: CustomOption) {
    console.log(customOption);

  }
}
