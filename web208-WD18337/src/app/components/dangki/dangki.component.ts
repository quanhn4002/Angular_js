import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { IStudent } from '../../../interface/student';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrl: './dangki.component.css',
})
export class DangkiComponent {
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
        alert('thêm thành công');
        this.route.navigate(['/dangnhap']);
      },
      (error) => {
        alert(error.error);
      }
    );
  };
}
