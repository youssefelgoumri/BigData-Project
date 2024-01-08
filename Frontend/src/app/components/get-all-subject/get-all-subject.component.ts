import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-get-all-subject',
  templateUrl: './get-all-subject.component.html',
  styleUrls: ['./get-all-subject.component.css']
})
export class GetAllSubjectComponent {
  subjects : any=[];

  constructor(private studentServie: StudentService){}
  
  ngOnInit(){
    this.getAllSubject();

  }

  getAllSubject(){
    this.studentServie.getAllSubject().subscribe((res) => {
      console.log(res);
      this.subjects=res;
    })
  }

  deleteSubject(id : number){
    this.studentServie.deleteSubject(id).subscribe((res)=> {
      console.log(res);
      this.getAllSubject();
    })
  }

}
