import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSosieteComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginSosieteComponent;
  let fixture: ComponentFixture<LoginSosieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSosieteComponent]
    });
    fixture = TestBed.createComponent(LoginSosieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
