import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { StudentService } from '../../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    age: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(100),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('0+[0-9]{10}$'),
    ]),
  });
  route = new Router();
  constructor(private StudentService: StudentService) {}
  onSubmit = () => {
    // Lấy dữ liệu từ form
    this.StudentService.Add_Student(
      this.studentForm.value as IStudent
    ).subscribe((data) => {
      this.studentForm;
    });
    alert('thêm thành công');
    this.route.navigate(['/admin/dashboard/students']);
  };
}
