import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { DocumentsComponent } from '../documents/documents.component';
import { CustomOption } from 'src/app/models/customOption';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() showResults: boolean = false;
  @Input() occurrence: string = '';

  searchForm: FormGroup = new FormGroup({
    cpfCnpjCliente: new FormControl('', Validators.required),
    occurrence: new FormControl('', Validators.required),
    occurrenceType: new FormControl('', Validators.required),
    occurrenceDate: new FormControl('', Validators.required),
    quemFaleceu: new FormControl('', Validators.required)
  })

  ocurrenceOptions: Array<CustomOption> = [
    new CustomOption(false, 'Acidente', 'acidente', 'occurrence'),
    new CustomOption(false, 'Doença', 'doenca', 'occurrence'),
    new CustomOption(false, 'Morte natural', 'morte', 'occurrence'),
    new CustomOption(false, 'Morte acidental', 'morte_acidental', 'occurrence'),
    new CustomOption(false, 'Outros', 'outros', 'occurrence')
  ];
  occurrenceTypeOptions: Array<CustomOption> = [
    new CustomOption(false, 'D.I.T. (Diárias por Incapacidade Temporaria)', 'dit_code', 'occurrenceType'),
  ];
  quemFaleceuOptions: Array<CustomOption> = [
    new CustomOption(false, 'Segurado(a) principal)', 'dit_code', 'quemFaleceu'),
  ]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { }

  getOccurrenceOptions() {
    if (this.searchForm.get('occurrence').value == 'morte' || this.searchForm.get('occurrence').value == 'morte_acidental') {
      this.searchForm.get('occurrenceType').disable();
      this.searchForm.get('quemFaleceu').enable();
    } else {
      this.searchForm.get('occurrenceType').enable();
      this.searchForm.get('quemFaleceu').disable();
    }
  }
  openDocuments() {
    this.modalService.open(DocumentsComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  search() {
    if (this.searchForm.invalid) {
      alert('Formulário inválido.')
    } else {
      this.showResults = true;
      this.occurrence = this.searchForm.get('occurrence').value;
    }
  }

  updateForm(customOption: CustomOption) {
    this.searchForm.get(customOption.formControlName).setValue(customOption.value);
    this.getOccurrenceOptions();

  }
}
