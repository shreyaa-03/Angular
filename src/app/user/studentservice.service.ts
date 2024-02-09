import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './StudentInterface';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  constructor(private http: HttpClient) {}

  private jsonUrl = 'assets/students.json';

  getStudent(): Observable<Students[]> {
    return this.http.get<Students[]>(this.jsonUrl);
  }
}
