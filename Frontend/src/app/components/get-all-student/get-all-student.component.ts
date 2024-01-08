import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-get-all-student',
  templateUrl: './get-all-student.component.html',
  styleUrls: ['./get-all-student.component.css']
})
export class GetAllStudentComponent {
  students: any = [];


  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.getAllStudent();

  }
  getAllStudent(){
    this.studentService.getAllStudent().subscribe((res)=> {
      console.log(res);
      this.students=res;
    })
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe((res)=>{
      console.log(res);
      this.getAllStudent();
    })

  }

 

}
