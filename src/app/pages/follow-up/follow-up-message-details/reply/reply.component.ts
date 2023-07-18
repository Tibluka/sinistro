import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageSuccessComponent } from 'src/app/components/message-success/message-success.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {

  mensagem: string = '';

  constructor(private modalService: ModalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close(true);
  }

  sendMessage() {
    this.modalService.open(MessageSuccessComponent)
  }

  back() {
  }
}
