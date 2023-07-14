import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFollowUpComponent } from './results-follow-up.component';

describe('ResultsFollowUpComponent', () => {
  let component: ResultsFollowUpComponent;
  let fixture: ComponentFixture<ResultsFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
