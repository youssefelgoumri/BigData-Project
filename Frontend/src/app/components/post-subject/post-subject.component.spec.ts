import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSubjectComponent } from './post-subject.component';

describe('PostSubjectComponent', () => {
  let component: PostSubjectComponent;
  let fixture: ComponentFixture<PostSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSubjectComponent]
    });
    fixture = TestBed.createComponent(PostSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
