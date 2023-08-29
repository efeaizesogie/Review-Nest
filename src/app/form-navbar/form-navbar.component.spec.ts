import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavbarComponent } from './form-navbar.component';

describe('FormNavbarComponent', () => {
  let component: FormNavbarComponent;
  let fixture: ComponentFixture<FormNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNavbarComponent]
    });
    fixture = TestBed.createComponent(FormNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
