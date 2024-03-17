import { Component, Input, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Student } from '../StudentInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrl: './poeple.component.css',
})
export class PoepleComponent {
  receivedStudentData!: Student[];
  angForm: FormGroup;


  constructor(
    private studentService: StudentserviceService,
    private fb: FormBuilder
  ) {
    this.angForm = this.fb.group({
      // Student: ['', Validators.required],
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
    });
  // const student :new Student()
  //   Object.keys(student).forEach((key) => {
  //     this.angForm.addControl(key, this.fb.control('', Validators.required));
  //   });
  }
  ngOnInit(): void {
    this.studentService.listStudents().subscribe((data) => {
      this.receivedStudentData = data;
    });
  }

  postdata(form: any) {
    this.studentService
      .addStudent(this.angForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          // this.route.navigate(['app-list-students']);
        },
        (error: any) => {}
      );
  }

}

// constructor(private studentService: StudentserviceService) {}

// ngOnInit(): void {
//   this studentService.listStudents().subscribe((data) => {
//     this.receive studentService = data;
//   });
// }
//  studentInfo!: Student[];
// this.angForm.value.id,
// this.angForm.value.name,
// this.angForm.value.email,
// this.angForm.value.gender
