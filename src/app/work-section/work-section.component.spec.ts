import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSectionComponent } from './work-section.component';

describe('WorkSectionComponent', () => {
  let component: WorkSectionComponent;
  let fixture: ComponentFixture<WorkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSectionComponent]
    });
    fixture = TestBed.createComponent(WorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
