import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import axios from 'axios';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  // @Input() students:IStudent[] = []
  // laayd ư
  constructor(private StudentService: StudentService) {}
  studentss: IStudent[] = [];
  ngOnInit() {
    this.StudentService.Get_All_Students().subscribe((data) => {
      this.studentss = data;
    });
  }
}
