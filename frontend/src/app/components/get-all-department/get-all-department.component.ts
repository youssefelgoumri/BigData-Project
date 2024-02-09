import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-get-all-department',
  templateUrl: './get-all-department.component.html',
  styleUrls: ['./get-all-department.component.css']
})
export class GetAllDepartmentComponent {

  departements: any=[];

  constructor(private depatmentService:DepartmentService){}

  ngOnInit(){

    this.getAllDepartment()

  }

  getAllDepartment(){
    this.depatmentService.getAllDepartment().subscribe((res) => {
      console.log(res);
      this.departements=res;
    })
  }

  deleteDepartment(id : number){
    this.depatmentService.deleteDepartment(id).subscribe((res) =>{
      console.log(res);
      this.getAllDepartment();
    })

  }

}
