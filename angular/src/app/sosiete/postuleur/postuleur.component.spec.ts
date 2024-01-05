import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostuleurComponent } from './postuleur.component';

describe('PostuleurComponent', () => {
  let component: PostuleurComponent;
  let fixture: ComponentFixture<PostuleurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostuleurComponent]
    });
    fixture = TestBed.createComponent(PostuleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
