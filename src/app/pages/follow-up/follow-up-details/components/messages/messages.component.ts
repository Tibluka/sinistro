import { Component, OnInit } from '@angular/core';
import { MessageSuccessComponent } from 'src/app/components/message-success/message-success.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  assunto: string = '';
  mensagem: string = '';
  showNewMessage: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close() {
    this.modalService.close(true);
  }

  back() {
    this.showNewMessage = false;
  }

  newMessage() {
    this.showNewMessage = true;
  }

  sendMessage() {
    this.modalService.open(MessageSuccessComponent)
  }
}
