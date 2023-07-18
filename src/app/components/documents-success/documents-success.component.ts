import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-documents-success',
  templateUrl: './documents-success.component.html',
  styleUrls: ['./documents-success.component.scss']
})
export class DocumentsSuccessComponent {

  constructor(private modalService: ModalService,
    private router: Router) { }

  ngOnInit(): void {
  }


  close() {
    this.modalService.close(true);
    this.router.navigate(['/follow-up/follow-up-details'])
  }

}
