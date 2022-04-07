import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  data:any;
  totalRecords:any;
  page:Number=1;

  constructor(private UserService:UsersDataService) {

    this.data=new Array<any>();

   }

   getUser(){
     this.UserService.users().subscribe((data)=>{
       console.log(data);
       this.data=data;
       this.totalRecords=data;
     })

   }

  ngOnInit(): void {
  }

}
