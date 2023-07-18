import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpDetailsComponent } from './follow-up-details.component';
import { RouterModule } from '@angular/router';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { PendingDocumentsComponent } from './pending-documents/pending-documents.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HistoryComponent } from './components/history/history.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FollowUpDetailsComponent,
    IncidentDetailsComponent,
    PendingDocumentsComponent,
    MessagesComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: FollowUpDetailsComponent }
    ])
  ]
})
export class FollowUpDetailsModule { }
