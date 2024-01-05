import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAgentComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardAgentComponent;
  let fixture: ComponentFixture<DashboardAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAgentComponent]
    });
    fixture = TestBed.createComponent(DashboardAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
