import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUpComponent } from './follow-up.component';
import { RouterModule } from '@angular/router';
import { SearchFollowUpComponent } from './search-follow-up/search-follow-up.component';
import { ResultsFollowUpComponent } from './search-follow-up/results-follow-up/results-follow-up.component';
import { CustomMultipleSelectModule } from 'src/app/components/custom-multiple-select/custom-multiple-select.module';
import { FormsModule } from '@angular/forms';
import { FollowUpMessageDetailsComponent } from './follow-up-message-details/follow-up-message-details.component';



@NgModule({
  declarations: [
    FollowUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMultipleSelectModule,
    RouterModule.forChild([
      {
        path: '', component: FollowUpComponent, children: [
          { path: 'search', loadChildren: () => import('./search-follow-up/search-follow-up.module').then(m => m.SearchFollowUpModule) },
          { path: 'follow-up-details', loadChildren: () => import('./follow-up-details/follow-up-details.module').then(m => m.FollowUpDetailsModule) },
          { path: 'follow-up-message-details', loadChildren: () => import('./follow-up-message-details/follow-up-message-details.module').then(m => m.FollowUpMessageDetailsModule) }
        ]
      }
    ])
  ]
})
export class FollowUpModule { }
