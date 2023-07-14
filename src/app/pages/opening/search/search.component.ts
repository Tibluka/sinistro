import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { DocumentsComponent } from '../documents/documents.component';
import { CustomOption } from 'src/app/models/customOption';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() showResults: boolean = false;

  cpfCnpjCliente: string = '';
  occurrence: string = '';
  occurrenceDate: any;
  occurrenceType: any;

  occurrenceOptions = [
    new CustomOption(false, 'Acidente', ''),
    new CustomOption(false, 'Doença', ''),
    new CustomOption(false, 'Morte natural', ''),
    new CustomOption(false, 'Morte acidental', ''),
    new CustomOption(false, 'Outros', '')];

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
