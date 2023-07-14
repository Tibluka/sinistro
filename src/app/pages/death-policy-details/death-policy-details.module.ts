import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeathPolicyDetailsComponent } from './death-policy-details.component';
import { CustomMultipleSelectModule } from 'src/app/components/custom-multiple-select/custom-multiple-select.module';



@NgModule({
  declarations: [
    DeathPolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMultipleSelectModule,
    RouterModule.forChild([
      { path: '', component: DeathPolicyDetailsComponent }
    ])
  ]
})
export class DeathPolicyDetailsModule { }
