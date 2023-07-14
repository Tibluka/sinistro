import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-up-message-details',
  templateUrl: './follow-up-message-details.component.html',
  styleUrls: ['./follow-up-message-details.component.scss']
})
export class FollowUpMessageDetailsComponent implements OnInit {

  messages = [];

  constructor() { }

  ngOnInit(): void {
  }

}
