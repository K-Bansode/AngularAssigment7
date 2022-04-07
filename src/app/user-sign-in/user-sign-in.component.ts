import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {


  public userID:any="";
  public userPass:any="";
  collection:any=[];

  loginUser =new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })


  constructor(public router:Router,private userData:UsersDataService ) {
    userData.getUsers().subscribe((data:any)=>{
      console.warn("data",data);
      this.collection=data;
    });
  }

  
  get emailValidate(){
    return this.loginUser.get('email');
  }
  get passValidate()
  {
    return this.loginUser.get('password');
  }

  onsubmit(data:any)
  {
    
    // alert(this.userID+""+this.userPass);

    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].email=== this.userID  && this.collection[i].password === this.userPass)
      {
          alert('login sucess');
          this.router.navigate(['dashboard']);
      }
      

    }
   
  }
  ngOnInit(): void {
  }

}
