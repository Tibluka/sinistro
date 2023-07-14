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

  searchForm: FormGroup = new FormGroup({
    cpfCnpjCliente: new FormControl('', Validators.required),
    occurrence: new FormControl('', Validators.required),
    occurrenceType: new FormControl('', Validators.required),
    occurrenceDate: new FormControl('', Validators.required)
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
  ]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { }

  openDocuments() {
    this.modalService.open(DocumentsComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  search() {
    if (this.searchForm.invalid) {
      alert('Forulario invalido')
    } else this.showResults = true;
  }

  updateForm(customOption: CustomOption) {
    this.searchForm.get(customOption.formControlName).setValue(customOption.value);
  }
}
