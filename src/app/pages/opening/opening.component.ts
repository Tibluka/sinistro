import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ResultsComponent } from './search/results/results.component';
import { DocumentsComponent } from './documents/documents.component';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  cpfCnpjCliente: string = '';
  occurrence: string = '';
  occurrenceDate: any;
  occurrenceType: any;

  constructor() { }

  ngOnInit(): void {
  }




}
