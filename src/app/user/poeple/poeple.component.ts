import { Component, Input, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Students } from '../StudentInterface';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrl: './poeple.component.css',
})
export class PoepleComponent {
  receivedStudentData: Students[] = [];

  constructor(private studentdata: StudentserviceService) {}

  ngOnInit(): void {
    this.studentdata.getStudent().subscribe((data) => {
      this.receivedStudentData = data;
    });
  }
  // studentInfo!: Students[];
  // constructor(private studentdata: StudentserviceService) {}
  // ngOnInit(): void {
  //   this.studentdata.getStudent().subscribe((data) => {
  //     this.studentInfo = data;
  //   });
  // }
}
