import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { HistoryComponent } from './components/history/history.component';
import { MessagesComponent } from './components/messages/messages.component';

interface Tab {
  id: number,
  description: string,
  selected: boolean
}

@Component({
  selector: 'app-follow-up-details',
  templateUrl: './follow-up-details.component.html',
  styleUrls: ['./follow-up-details.component.scss']
})
export class FollowUpDetailsComponent implements OnInit {

  incident: string = '1017102999230';

  tabSelected = 0;

  tabs: Array<Tab> = [
    {
      id: 0,
      description: 'Detalhes do sinistro',
      selected: true
    },
    {
      id: 1,
      description: 'Documentos pendentes',
      selected: false
    }
  ]

  constructor(private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private router: Router) {
    const { incident } = this.activatedRouter.snapshot.queryParams;
    if (!incident) return;
    this.incident = incident;
  }

  ngOnInit(): void {
    this.tabs.forEach(t => {
      if (t.id === this.tabSelected) {
        t.selected = true;
      } else t.selected = false;
    });
  }

  changeTab(tab: Tab) {
    this.tabs.find((tb: Tab) => {
      if (tb.selected) tb.selected = false;
    })
    tab.selected = true;
    this.tabSelected = tab.id;
    this.router.navigate([], {
      queryParams: {
        tab: tab.id
      }
    })
  }

  openMessagesComponent() {
    this.modalService.open(MessagesComponent, {
      content: {
        sideSlide: true
      }
    })
  }

  openHistoryComponent() {
    this.modalService.open(HistoryComponent, {
      content: {
        sideSlide: true
      }
    })
  }
}
