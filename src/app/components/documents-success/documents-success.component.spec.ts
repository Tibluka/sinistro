import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSuccessComponent } from './documents-success.component';

describe('DocumentsSuccessComponent', () => {
  let component: DocumentsSuccessComponent;
  let fixture: ComponentFixture<DocumentsSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsSuccessComponent]
    });
    fixture = TestBed.createComponent(DocumentsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
