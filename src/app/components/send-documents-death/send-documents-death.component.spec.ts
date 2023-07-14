import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDocumentsDeathComponent } from './send-documents-death.component';

describe('SendDocumentsDeathComponent', () => {
  let component: SendDocumentsDeathComponent;
  let fixture: ComponentFixture<SendDocumentsDeathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendDocumentsDeathComponent]
    });
    fixture = TestBed.createComponent(SendDocumentsDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
