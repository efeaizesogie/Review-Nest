import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavRightComponent } from './dashboard-nav-right.component';

describe('DashboardNavRightComponent', () => {
  let component: DashboardNavRightComponent;
  let fixture: ComponentFixture<DashboardNavRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardNavRightComponent]
    });
    fixture = TestBed.createComponent(DashboardNavRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
