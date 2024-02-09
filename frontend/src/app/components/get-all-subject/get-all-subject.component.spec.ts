import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSubjectComponent } from './get-all-subject.component';

describe('GetAllSubjectComponent', () => {
  let component: GetAllSubjectComponent;
  let fixture: ComponentFixture<GetAllSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllSubjectComponent]
    });
    fixture = TestBed.createComponent(GetAllSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
