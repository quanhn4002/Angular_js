import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from '../interface/student';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/users';

  Register = (userdata: any) => {
    return this.http.post(this.API_URL, userdata);
  };
  Login = (userdata: any) => {
    return this.http.post(this.API_URL, userdata);
  };
}
