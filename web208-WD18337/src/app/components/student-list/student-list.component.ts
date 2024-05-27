import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interface/student';
import axios from 'axios';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  // @Input() students:IStudent[] = []
  // laayd ư
  studentss: IStudent[] = [];
  async ngOnInit() {
    const { data } = await axios.get('http://localhost:3000/students');
    this.studentss = data;
  }
}
