import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../../../interface/student';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css',
})
export class DangnhapComponent {
  constructor(private UserService: UserService) {}
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  route = new Router();
  onSubmit = () => {
    this.UserService.Register(this.registerForm.value as IStudent).subscribe(
      (data) => {
        this.registerForm;
      }
    );
    alert(' Đăng thành công');
    this.route.navigate(['admin/dashboard/students']);
  };
}
