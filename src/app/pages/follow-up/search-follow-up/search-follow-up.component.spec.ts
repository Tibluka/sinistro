import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFollowUpComponent } from './search-follow-up.component';

describe('SearchFollowUpComponent', () => {
  let component: SearchFollowUpComponent;
  let fixture: ComponentFixture<SearchFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
