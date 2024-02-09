import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostStudentComponent } from './components/post-student/post-student.component';
import { GetAllStudentComponent } from './components/get-all-student/get-all-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PostDepartmentComponent } from './components/post-department/post-department.component';
import { GetAllDepartmentComponent } from './components/get-all-department/get-all-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { GetAllSubjectComponent } from './components/get-all-subject/get-all-subject.component';
import { PostSubjectComponent } from './components/post-subject/post-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    PostStudentComponent,
    GetAllStudentComponent,
    UpdateStudentComponent,
    PostDepartmentComponent,
    GetAllDepartmentComponent,
    UpdateDepartmentComponent,
    GetAllSubjectComponent,
    PostSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
