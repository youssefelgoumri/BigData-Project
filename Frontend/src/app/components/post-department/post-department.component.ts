import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.css']
})
export class PostDepartmentComponent {

  postDepartmentForm!: FormGroup;

  constructor(private departmentService:DepartmentService , private fb:FormBuilder , private router: Router){}

  ngOnInit(){
    this.postDepartmentForm = this.fb.group({
      name: [null, [Validators.required]],
    })

  }

  postDepartment(){
    console.log(this.postDepartmentForm.value);
    this.departmentService.postDepartment (this.postDepartmentForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/Alldepartment");
    })
  }

}
