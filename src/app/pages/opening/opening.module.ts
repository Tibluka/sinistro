import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningComponent } from './opening.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'src/app/components/alert/alert.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { ResultsComponent } from './search/results/results.component';
import { DocumentsComponent } from './documents/documents.component';
import { SearchComponent } from './search/search.component';
import { CustomMultipleSelectModule } from 'src/app/components/custom-multiple-select/custom-multiple-select.module';



@NgModule({
  declarations: [
    OpeningComponent,
    ResultsComponent,
    DocumentsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    CustomMultipleSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    RouterModule.forChild([
      { path: '', component: OpeningComponent }
    ])
  ],
  providers: [
    provideEnvironmentNgxMask()
  ]
})
export class OpeningModule { }
