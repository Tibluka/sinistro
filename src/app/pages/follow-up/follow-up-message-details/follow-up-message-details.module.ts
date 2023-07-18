import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpMessageDetailsComponent } from './follow-up-message-details.component';
import { RouterModule } from '@angular/router';
import { ReplyComponent } from './reply/reply.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FollowUpMessageDetailsComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: FollowUpMessageDetailsComponent }
    ])
  ]
})
export class FollowUpMessageDetailsModule { }
