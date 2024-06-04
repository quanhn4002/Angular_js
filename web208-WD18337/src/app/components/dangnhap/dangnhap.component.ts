import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../../../interface/student';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css',
})
export class DangnhapComponent {
  constructor(private UserService: UserService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  route = new Router();
  // làm đăng nhập cho tôi
  onSubmitLogin = () => {
    this.UserService.Login(this.loginForm.value as IStudent).subscribe(
      (data) => {
        localStorage.setItem('token', data?.accessToken);
        alert('Đăng Nhập thành công');
        this.router.navigate(['admin/dashboard']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
  router = new Router();
  ngOnInit() {
    if (this.UserService.CheckUserValid()) {
      this.router.navigate(['admin/dashboard/students']);
    }
  }
}
