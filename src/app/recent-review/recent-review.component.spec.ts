import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReviewComponent } from './recent-review.component';

describe('RecentReviewComponent', () => {
  let component: RecentReviewComponent;
  let fixture: ComponentFixture<RecentReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentReviewComponent]
    });
    fixture = TestBed.createComponent(RecentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
