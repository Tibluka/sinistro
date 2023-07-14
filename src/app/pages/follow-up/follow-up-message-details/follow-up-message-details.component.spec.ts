import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpMessageDetailsComponent } from './follow-up-message-details.component';

describe('FollowUpMessageDetailsComponent', () => {
  let component: FollowUpMessageDetailsComponent;
  let fixture: ComponentFixture<FollowUpMessageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowUpMessageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
