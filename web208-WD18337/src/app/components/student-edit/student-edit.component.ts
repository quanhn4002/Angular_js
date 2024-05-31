import { StudentService } from './../../student.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IStudent } from '../../../interface/student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css',
})
export class StudentEditComponent {
  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentService
  ) {}
  /// khai báo form và validate
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
  // lấy id từ url
  studentId = this.route.snapshot.params['id'];
  // lấy thông tin sinh viên theo id
  ngOnInit() {
    this.StudentService.Get_Student_By_Id(this.studentId).subscribe((data) => {
      console.log(data);
      this.studentForm.controls.name.setValue(data.name);
      this.studentForm.controls.age.setValue(data.age);
      this.studentForm.controls.email.setValue(data.email);
      this.studentForm.controls.phone.setValue(data.phone);
    });
  }
  router = new Router();
  // hàm submit
  onSubmit = () => {
    this.StudentService.Update_Student(
      this.studentId,
      this.studentForm.value as IStudent
    ).subscribe((data) => {
      alert('update thanh cong');
      this.router.navigate(['admin/dashboard/students']);
    });
  };
}
