import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  


  p:number=1;
  totalLength:any;

  public status=true;

  status2(){
    if(this.status)
    {
      return "active";
    }
    else{
      return "inactive";
    }
  }
  
  public successClass="success";
  public failedClass="fail";
  
  public messege={
    "success":this.status,
    "fail":!this.status
  }

   collection:any=[];

  users:any;
  constructor(private UsersData:UsersDataService,public router:Router){
    UsersData.users().subscribe((data:any)=>{
      console.warn("data",data);
      this.collection=data;
      this.totalLength=data.length;
      
    });
  


  }
  

  
  ngOnInit(): void {
  }

}
