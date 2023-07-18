import { Component, OnInit } from '@angular/core';
import { DocumentsSuccessComponent } from 'src/app/components/documents-success/documents-success.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-pending-documents',
  templateUrl: './pending-documents.component.html',
  styleUrls: ['./pending-documents.component.scss']
})
export class PendingDocumentsComponent implements OnInit {

  pendingDocuments = [1];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  sendDocuments() {
    this.modalService.open(DocumentsSuccessComponent)
  }

}
