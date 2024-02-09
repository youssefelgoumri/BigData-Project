import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrls: ['./post-student.component.css']
})
export class PostStudentComponent {

  postStudentForm!: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router){}

  ngOnInit(){
    this.postStudentForm = this.fb.group({
      name: [null , [Validators.required]],
      subjects: [null , [Validators.required]]
    })

  }

  postStudent(){
    console.log(this.postStudentForm.value);
    this.studentService.postStudent (this.postStudentForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/Allstudent");
    })

  }

}
