import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-forgot-password-user',
  templateUrl: './forgot-password-user.component.html',
  styleUrls: ['./forgot-password-user.component.css']
})
export class ForgotPasswordUserComponent implements OnInit {

   error:any="There is no user record corrosponding to this identifire .The user may have beeen deleted ";
   success:boolean=false;
  forgetPass=new FormGroup({
 
    email:new FormControl('',[Validators.required,Validators.email]),
  })

  constructor(public router:Router,private userData:UsersDataService ) {
   
  }


  onsubmit(data:any){
    console.log(data);
    this.userData.forgetPassword(data).subscribe((res)=>{
      console.log(res);
      this.success=true
    },(err)=>{
      console.log(err)
      this.error=err
    
    })
  }
  ngOnInit(): void {
  }

}
