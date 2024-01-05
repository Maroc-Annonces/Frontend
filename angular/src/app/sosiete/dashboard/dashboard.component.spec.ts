import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSosieteComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardSosieteComponent;
  let fixture: ComponentFixture<DashboardSosieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSosieteComponent]
    });
    fixture = TestBed.createComponent(DashboardSosieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
