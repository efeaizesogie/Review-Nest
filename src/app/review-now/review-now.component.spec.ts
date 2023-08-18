import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNowComponent } from './review-now.component';

describe('ReviewNowComponent', () => {
  let component: ReviewNowComponent;
  let fixture: ComponentFixture<ReviewNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewNowComponent]
    });
    fixture = TestBed.createComponent(ReviewNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
