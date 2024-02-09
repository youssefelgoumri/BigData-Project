import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  postStudent(student: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/students" , student)
  }


  getAllStudent(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/students");

  }
  deleteStudent(id:number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/students/" +id);

  }

  getStudentById(id:number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/students/"+ id);

  }

  getAllSubject(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/subjects");

  }

  deleteSubject(id:number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/subjects/" +id);

  }
}
