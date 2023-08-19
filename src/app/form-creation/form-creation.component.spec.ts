import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationComponent } from './form-creation.component';

describe('FormCreationComponent', () => {
  let component: FormCreationComponent;
  let fixture: ComponentFixture<FormCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreationComponent]
    });
    fixture = TestBed.createComponent(FormCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
