import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostStudentComponent } from './components/post-student/post-student.component';
import { GetAllStudentComponent } from './components/get-all-student/get-all-student.component';
import { PostDepartmentComponent } from './components/post-department/post-department.component';
import { GetAllDepartmentComponent } from './components/get-all-department/get-all-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { GetAllSubjectComponent } from './components/get-all-subject/get-all-subject.component';

const routes: Routes = [
  {path: 'student' , component: PostStudentComponent},
  {path: 'Allstudent' , component: GetAllStudentComponent},
  {path: 'department' , component: PostDepartmentComponent},
  {path: 'Alldepartment' , component: GetAllDepartmentComponent},
  {path: 'department/:id' , component: UpdateDepartmentComponent},
  {path: 'student/:id' , component: UpdateStudentComponent},
  {path: 'Allsubject' , component: GetAllSubjectComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
