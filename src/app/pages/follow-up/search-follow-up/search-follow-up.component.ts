import { Component, OnInit } from '@angular/core';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-search-follow-up',
  templateUrl: './search-follow-up.component.html',
  styleUrls: ['./search-follow-up.component.scss']
})
export class SearchFollowUpComponent implements OnInit {

  searchTypes = [
    new CustomOption(false, 'CPF', 'cpf'),
    new CustomOption(false, 'Doença', 'doenca'),
    new CustomOption(false, 'Morte', 'morte'),
    new CustomOption(false, 'Outros', 'outros'),
  ]
  cpfCnpjCliente: string;

  constructor() { }

  ngOnInit(): void {
  }

  optionSelected(customOption: CustomOption) {

  }

}
