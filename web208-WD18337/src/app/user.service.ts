import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from '../interface/student';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000';

  Register = (userdata: IStudent): Observable<any> => {
    return this.http.post(this.API_URL + '/register', userdata);
  };
  Login = (userdata: IStudent): Observable<any> => {
    return this.http.post(this.API_URL + '/login', userdata);
  };
  CheckUserValid = (): boolean => {
    let check = false;
    const token: string = localStorage.getItem('token') as string;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000 && decoded.sub == 1) {
        check = true;
      }
    } catch (error) {
      console.log(error);
    }
    return check;
  };
}
