import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarationHeirsComponent } from './declaration-heirs.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeclarationHeirsComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: '', component: DeclarationHeirsComponent}
    ])  ]
})
export class DeclarationHeirsModule { }
