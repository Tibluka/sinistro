import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-message-success',
  templateUrl: './message-success.component.html',
  styleUrls: ['./message-success.component.scss']
})
export class MessageSuccessComponent {
  
  constructor(private modalService: ModalService,
    private router: Router) { }

  ngOnInit(): void {
  }


  close() {
    this.modalService.close(true);
    this.router.navigate(['/follow-up/follow-up-details'])
  }

}
