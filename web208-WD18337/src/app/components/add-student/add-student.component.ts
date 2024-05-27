import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  constructor(public DomSanitizer: DomSanitizer) {}
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

  onSubmit = async () => {
    // Lấy dữ liệu từ form
    const studentdata: IStudent = this.studentForm.value as IStudent;
    const { data } = await axios.post(
      `http://localhost:3000/students`,
      studentdata
    );
    alert('Thêm mới thành công');
  };
}
