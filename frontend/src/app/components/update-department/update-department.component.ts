import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
  updateDepartmentForm!: FormGroup
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute ,private service: DepartmentService,private router: Router, private fb : FormBuilder){}

  ngOnInit(){
    this.updateDepartmentForm = this.fb.group({
      name: [null, [Validators.required]],
    })
    this.getDepartmentById();

  }
  getDepartmentById( ){

    this.service.getDepartmentById(this.  id).subscribe((res) => {
      console.log(res);
      this.updateDepartmentForm.patchValue(res);
    })

  }

  updateDepartment(){
    this.service.updateDepartment(this.id, this.updateDepartmentForm.value).subscribe((res)=> {
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("/Alldepartment");
      }
    })
  }

}
