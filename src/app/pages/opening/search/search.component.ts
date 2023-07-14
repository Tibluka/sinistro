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

  options = [
    new CustomOption(false, 'Acidente', 'acidente'), 
  new CustomOption(false, 'Doença', 'doenca' ), 
  new CustomOption(false, 'Morte natural', 'morte'), 
  new CustomOption(false, 'Morte acidental', 'morte_acidental'), 
  new CustomOption(false, 'Outros', 'outros')];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openDocuments() {
    this.modalService.open(DocumentsComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  search() {
    this.showResults = true;
  }
  
  optionSelected(customOption: CustomOption) {
    console.log(customOption);

  }
}
