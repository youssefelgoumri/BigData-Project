import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  id: number = this.activateRouter.snapshot.params["id"];

  constructor(private activateRouter: ActivatedRoute , private service : StudentService){

  }
  ngOnInit(){
    this.getStudentById();

  }

  getStudentById( ){
    this.service.getStudentById(this.id).subscribe((res) => {
      console.log(res);

    })

  }

}
