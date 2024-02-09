import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students } from '../StudentInterface';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student, [studentInfo]',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  studentDataEvent = new EventEmitter<Students[]>();

  @Input() studentInfo!: Students;
  constructor(private studentdata: StudentserviceService) {}

  // sendDataToPeople() {
  //   this.studentdata.getStudent().subscribe((data) => {
  //     this.studentInfo = data;

  //     this.studentDataEvent.emit(this.studentInfo);
  //   });
  // }
}
