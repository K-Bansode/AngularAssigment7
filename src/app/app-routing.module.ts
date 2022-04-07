import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { ForgotPasswordUserComponent } from './forgot-password-user/forgot-password-user.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path:'',
    component:AddUserComponentComponent
  },
  {
    component:AddUserComponentComponent,
    path:'add-user-component'
  },
  {
    path:'table-list-view-user-list',
    component:TableListViewUserListComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
    path:'edit-user-compnent/:id',
    component:EditUserCompnentComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'user-sign-in',
    component:UserSignInComponent
  },
  {
    path:'user-signup',
    component:UserSignupComponent
  },
  {
    path:'forgot-password-user',
    component:ForgotPasswordUserComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
