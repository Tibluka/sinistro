import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendDocumentsDeathComponent } from './components/send-documents-death/send-documents-death.component';
import { RegisterBeneficiaryComponent } from './components/register-beneficiary/register-beneficiary.component';
import { FormsModule } from '@angular/forms';
import { CustomMultipleSelectModule } from './components/custom-multiple-select/custom-multiple-select.module';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    SendDocumentsDeathComponent,
    RegisterBeneficiaryComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomMultipleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
