import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from './StudentInterface';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://127.0.0.1:5000/';

  // getStudent(): Observable<Students[]> {
  //   return this.http.get<Students[]>(this.baseUrl);
  // }
  // public addStudent():Observable<Students[]>{
  //   return this.http.post<Students[]>(this.baseUrl + 'students',{id, name, email, gender}).pipe.
  //   map((Students:any) => {return Students});
  // }
  // id: any, name: any, email: any, gender: any
  // public addStudent(id: any, name: any, email: any, gender: any) {
  //   return this.http
  //     .post<Students>(this.baseUrl + 'students', {
  //       id,
  //       name,
  //       email,
  //       gender,
  //     })
  //     .pipe(
  //       map((Students: any) => {
  //         return Students;
  //       })
  //     );
  // }
  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl + 'students', student);
  }

  public listStudents() {
    return this.http.get<Student[]>(this.baseUrl + 'students');
  }
  public deletesStudent(id: any) {
    // const params = new HttpParams().set('id', id);
    // console.log('AA' + id);
    return this.http.delete(this.baseUrl + 'students/' + id);
  }
  public getStudentById(id: number) {
    return this.http.get<Student>(this.baseUrl + 'students/' + id);
  }
}
