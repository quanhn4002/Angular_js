import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent {
  router = inject(ActivatedRoute);
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(7)]),
    age: new FormControl(18),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('0+[0-9]{9}$'),
    ]),
  });
  async ngOnInit() {
    const studentid = this.router.snapshot.params['id'];
    const { data } = await axios.get(
      `http://localhost:3000/students/${studentid}`
    );
    this.studentForm.controls.name.setValue(data.name);
    this.studentForm.controls.age.setValue(data.age);
    this.studentForm.controls.email.setValue(data.email);
    this.studentForm.controls.phone.setValue(data.phone);
  }
  onEditStudent = async () => {
    const studentid = this.router.snapshot.params['id'];
    const { data } = await axios.put(
      `http://localhost:3000/students/${studentid}`,
      this.studentForm.value
    );
    alert('Cập nhật thành công');
  };
}
