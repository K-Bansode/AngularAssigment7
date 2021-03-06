import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  url="http://localhost:3000/userInfo";
  constructor(private http:HttpClient) { }

  users(){
    return this.http.get('http://localhost:3000/userInfo');
  }
  saveUser(data:any){
    return this.http.post('http://localhost:3000/userInfo',data);
  }
  getCurrentId(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  UpdateUser(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
  
  DeleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  
  registerUser(data:any){
    return this.http.post('http://localhost:3000/registerdUser',data);
  }
  getUsers(){
    return this.http.get('http://localhost:3000/registerdUser');
  }

  forgetPassword(data:any){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[API_KEY]',{
      requestType:'PASSWORD_RESET',
      email:'data.email'
    })
    
  }
}
