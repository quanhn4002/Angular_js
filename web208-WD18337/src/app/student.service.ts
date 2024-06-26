import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/students';
  Get_All_Students = (): Observable<any> => {
    //Observable<any> là kiểu dữ liệu trả về của hàm Get_All_Students
    return this.http.get(this.API_URL);
  };
  Add_Student = (studentdata: any): Observable<any> => {
    return this.http.post(this.API_URL, studentdata);
  };
  Get_Student_By_Id = (id: string): Observable<any> => {
    return this.http.get(`${this.API_URL}/${id}`);
  };
  Update_Student = (id: string, studentdata: any): Observable<any> => {
    return this.http.put(`${this.API_URL}/${id}`, studentdata);
  };
  Delete_Student = (id: any): Observable<any> => {
    return this.http.delete(`${this.API_URL}/${id}`);
  };
}
