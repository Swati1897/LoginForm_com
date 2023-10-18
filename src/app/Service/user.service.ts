import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_Url = " http://localhost:5000";

  constructor(private http: HttpClient ){}

  buildHeaders(): HttpHeaders {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': ''
    };

    if (localStorage.getItem('token')) {
      
      headersConfig['Authorization'] = `bearer ${localStorage.getItem('token')}`;
    }
    return new HttpHeaders(headersConfig);
  }

// 
    loginUser(user: User) {
      return this.http.post<string>(this.server_Url + "/login", user)
                  .subscribe((res: any) => {
                    localStorage.setItem("token", res.jwtToken)
                    localStorage.setItem("resMessage", res.message);
                })
    }

//     
    saveUser(user: User) {
      return this.http.post<string>(this.server_Url + "/register", user);
    }

//    
    userProfile() {
      return this.http.get(this.server_Url + "/user-info", { headers: this.buildHeaders() })
    }

//
    logoutUser(){
      localStorage.removeItem('token');
    }
  

 
}
