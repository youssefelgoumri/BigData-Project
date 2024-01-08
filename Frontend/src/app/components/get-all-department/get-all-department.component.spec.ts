import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDepartmentComponent } from './get-all-department.component';

describe('GetAllDepartmentComponent', () => {
  let component: GetAllDepartmentComponent;
  let fixture: ComponentFixture<GetAllDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllDepartmentComponent]
    });
    fixture = TestBed.createComponent(GetAllDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
