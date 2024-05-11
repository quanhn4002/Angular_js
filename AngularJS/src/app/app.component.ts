import { Component } from '@angular/core';
import { Iproduct } from '../interfaces/product';
import { IStudent } from '../interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularJS';
  students: IStudent[] = [
    //
    {
      name: 'John Doe',
      age: 20,
      address: '123 Main St',
      classname: 'Computer Science',
    },
    {
      name: 'Jane Doe32',
      age: 2123,
      address: '456 Main St32',
      classname: 'Mathematics323',
    },
    {
      name: 'Jane AQuan',
      age: 23,
      address: '456 Main St32',
      classname: 'Mathematics323',
    },
  ];
  addStudent = (data: IStudent) => {
    this.students.push(data);
  };
}
