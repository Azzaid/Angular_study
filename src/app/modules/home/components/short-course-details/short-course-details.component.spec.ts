import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCourseDetailsComponent } from './short-course-details.component';

describe('ShortCourseDetailsComponent', () => {
  let component: ShortCourseDetailsComponent;
  let fixture: ComponentFixture<ShortCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(ShortCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
