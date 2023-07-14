import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeathPolicyDetailsComponent } from './death-policy-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: DeathPolicyDetailsComponent}
    ])
  ]
})
export class DeathPolicyDetailsModule { }