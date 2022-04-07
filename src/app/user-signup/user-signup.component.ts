import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  registerUser =new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    cnfPass:new FormControl('',[Validators.required,])
  })

  constructor(public router:Router,private userData:UsersDataService ) {
   
   }

  onclickfun(){
    this.router.navigate(['user-sign-in']);
  }

  onsubmit(data:any){
    console.warn(data);
    this.userData.registerUser(data).subscribe((result)=>{
      console.warn(result);
        alert('user register sucessfully') 
        this.registerUser.reset();
    })
    
  }
 get nameValidate(){
return this.registerUser.get('firstname');
  }

  get passvalidate(){
    return this.registerUser.get('password');
  }

  get emailvalidate(){
    return this.registerUser.get('email');
  }

get lastnameValidate()
{
  return this.registerUser.get('lastname');
}
get cnfPassValidate()
{
  return this.registerUser.get('cnfPass');
}
  ngOnInit(): void {
  }



}
