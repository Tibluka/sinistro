import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFollowUpComponent } from './search-follow-up.component';
import { FormsModule } from '@angular/forms';
import { CustomMultipleSelectModule } from 'src/app/components/custom-multiple-select/custom-multiple-select.module';
import { ResultsFollowUpComponent } from './results-follow-up/results-follow-up.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchFollowUpComponent,
    ResultsFollowUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMultipleSelectModule,
    RouterModule.forChild([
      { path: '', component: SearchFollowUpComponent }
    ])
  ]
})
export class SearchFollowUpModule { }
