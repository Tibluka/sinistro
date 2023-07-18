import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ReplyComponent } from './reply/reply.component';

@Component({
  selector: 'app-follow-up-message-details',
  templateUrl: './follow-up-message-details.component.html',
  styleUrls: ['./follow-up-message-details.component.scss']
})
export class FollowUpMessageDetailsComponent implements OnInit {

  messages = [];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  reply() {
    this.modalService.open(ReplyComponent, {
      content: {
        sideSlide: true
      }
    })
  }
}
