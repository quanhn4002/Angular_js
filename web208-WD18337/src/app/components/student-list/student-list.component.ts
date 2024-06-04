import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import axios from 'axios';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  constructor(private StudentService: StudentService) {}

  students: IStudent[] = [];
  ngOnInit() {
    this.StudentService.Get_All_Students().subscribe((data) => {
      this.students = data;
    });
  }
  onDelete = (id: any) => {
    if (confirm('Bạn chắc chứ?')) {
      this.StudentService.Delete_Student(id).subscribe((data) => {
        this.students = this.students.filter((student) => student.id !== id);
      });
    }
  };
  router = new Router();
  Logout = () => {
    // localStorage.setItem('token
    localStorage.removeItem('token');
    this.router.navigate(['']);
  };
}
