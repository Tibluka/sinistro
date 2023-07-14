import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeneficiaryComponent } from './register-beneficiary.component';

describe('RegisterBeneficiaryComponent', () => {
  let component: RegisterBeneficiaryComponent;
  let fixture: ComponentFixture<RegisterBeneficiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterBeneficiaryComponent]
    });
    fixture = TestBed.createComponent(RegisterBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
