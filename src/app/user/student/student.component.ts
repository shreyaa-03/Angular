import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../StudentInterface';
import { StudentserviceService } from '../studentservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student, [studentInfo]',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  studentsinfo!: Student[];
  @Input() studentInfo!: Student;
  // angForm: FormGroup;
  route: any;
  studentdata: any;

  constructor(
    private fb: FormBuilder,
    private studentServie: StudentserviceService
  ) {}
  ngOnInit(): void {
    this.studentServie.listStudents().subscribe((data: any) => {
      this.studentsinfo = data;
    });
  }

  public deleteStudent(stud_id: any): void {
    this.studentServie.deletesStudent(stud_id).subscribe((data) => {
      // this.studentsInfo = this.studentsInfo.filter((u: any) => u !== stud_id);
      setTimeout(() => {
        this.studentServie.listStudents().subscribe;
        (data: any) => {
          this.studentsinfo = data;
        };
      }, 100);
    });
  }


  studentDataEvent = new EventEmitter<Student>();
  sendDataToPeople() {
    this.studentdata.listStudents().subscribe((data: Student) => {
      this.studentInfo = data;

      this.studentDataEvent.emit(this.studentInfo);
    });
  }
}

// this.angForm = this.fb.group({
//   // Students: ['', Validators.required],
//   id: ['', Validators.required],
//   name: ['', Validators.required],
//   email: ['', Validators.required],
//   gender: ['', Validators.required],
// });

// postdata(form: any) {
//   this.studentServie
//     .addStudent(
//       this.angForm.value.Student
//       // this.angForm.value.id,
//       // this.angForm.value.name,
//       // this.angForm.value.email,
//       // this.angForm.value.gender
//     )
//     .pipe(first())
//     .subscribe(
//       (data: any) => {
//         // this.route.navigate(['app-list-students']);
//       },
//       (error: any) => {}
//     );
// }
