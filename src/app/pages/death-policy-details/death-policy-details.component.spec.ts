import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathPolicyDetailsComponent } from './death-policy-details.component';

describe('DeathPolicyDetailsComponent', () => {
  let component: DeathPolicyDetailsComponent;
  let fixture: ComponentFixture<DeathPolicyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathPolicyDetailsComponent]
    });
    fixture = TestBed.createComponent(DeathPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
