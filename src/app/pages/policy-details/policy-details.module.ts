import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyDetailsComponent } from './policy-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { CustomMultipleSelectModule } from 'src/app/components/custom-multiple-select/custom-multiple-select.module';



@NgModule({
  declarations: [
    PolicyDetailsComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomMultipleSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PolicyDetailsComponent }
    ])
  ]
})
export class PolicyDetailsModule { }
