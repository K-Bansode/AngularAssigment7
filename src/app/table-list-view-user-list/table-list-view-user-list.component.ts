import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UsersDataService } from '../services/users-data.service';


@Component({
  selector: 'app-table-list-view-user-list',
  templateUrl: './table-list-view-user-list.component.html',
  styleUrls: ['./table-list-view-user-list.component.css']
})
export class TableListViewUserListComponent implements OnInit {
public whichsort="";
public filterdata="";
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

  clickFun(){
    
    this.router.navigate(['add-user-component']);
  }
  deleteUser(id:any){
    this.users.splice(id-1,1)
    this.UsersData.DeleteUser(id).subscribe((result)=>{
      console.warn("result",result)
    })
  }

  AtoZSort(){
    this.whichsort="asc";
  console.log(this.whichsort);
  
    
  }

  ZtoASort(){
    this.whichsort="desc";
  console.log(this.whichsort);
  }


  rolesearch:string='';
  userFilter(){
    this.filterdata='user';
    console.log(this.filterdata)
  }
  adminFilter(){
    console.log('admin')

    this.filterdata='admin'
  }
  ngOnInit(): void {

    
  }

}

  

