import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
    
    public total:any;

    public totalActiveUser:any;
    collection:any=[];
  
    users:any;
    constructor(private UsersData:UsersDataService,public router:Router){
      UsersData.users().subscribe((data:any)=>{
        console.warn("data",data);
        this.collection=data;

        
        
      });
    }

      activeUser()
      {
          let counter = 0;
        for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i].status === 'active') counter++;
      }

      console.log(counter);
      return counter;
    }

    inactiveUser(){
      let counter = 0;
      for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].status === 'inactive') counter++;
    }

    console.log(counter);
    return counter;
    }

    ngOnInit(): void {
    

   
    
    
  
  }
  
}
  
  