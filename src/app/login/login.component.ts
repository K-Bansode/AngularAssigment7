import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

   
  public userID:any="";
  public userPass:any="";
  collection:any=[];

  users:any;
  constructor(private UsersData:UsersDataService,public router:Router){
    UsersData.users().subscribe((data:any)=>{
      console.warn("data",data);
      this.collection=data;

      
      
    });
  }
  validate()
  {
    
    // alert(this.userID+""+this.userPass);

    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].firstname === this.userID  && this.collection[i].password === this.userPass)
      {
          alert('login sucess');
          this.router.navigate(['dashboard']);
      }
      

    }
    if(this.userID=='')
    {
      alert('userId cant be blank')
    }
    if(this.userPass=='')
    {
      alert('password cant be blank')
    }
  }

  ngOnInit(): void {
  

 
  
  

}

}

