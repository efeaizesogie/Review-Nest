import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLayoutComponent } from './sign-up-layout.component';

describe('SignUpLayoutComponent', () => {
  let component: SignUpLayoutComponent;
  let fixture: ComponentFixture<SignUpLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpLayoutComponent]
    });
    fixture = TestBed.createComponent(SignUpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
