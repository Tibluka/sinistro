import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpMessageDetailsComponent } from './follow-up-message-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FollowUpMessageDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FollowUpMessageDetailsComponent }
    ])
  ]
})
export class FollowUpMessageDetailsModule { }
