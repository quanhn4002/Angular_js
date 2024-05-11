import { Component, Input } from '@angular/core';
import { IStudent } from '../../../interfaces/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  @Input() students: IStudent[] = [];
}
