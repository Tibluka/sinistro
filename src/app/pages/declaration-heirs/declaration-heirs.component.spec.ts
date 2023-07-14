import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationHeirsComponent } from './declaration-heirs.component';

describe('DeclarationHeirsComponent', () => {
  let component: DeclarationHeirsComponent;
  let fixture: ComponentFixture<DeclarationHeirsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarationHeirsComponent]
    });
    fixture = TestBed.createComponent(DeclarationHeirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
