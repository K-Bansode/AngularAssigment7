import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.css']
})
export class AddUserComponentComponent implements OnInit {


  users:any;
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
   }
  ngsubmit(data:any){
    
    console.warn(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result);
        alert('user register sucessfully') 
    })
    

  }
 
  

  ngOnInit(): void {
  }

}
