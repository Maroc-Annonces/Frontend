import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgentComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginAgentComponent;
  let fixture: ComponentFixture<LoginAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAgentComponent]
    });
    fixture = TestBed.createComponent(LoginAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
