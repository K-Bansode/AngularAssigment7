import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgpSortModule } from 'ngp-sort-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';

import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { DeleteUserComponentComponent } from './delete-user-component/delete-user-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import{HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserListComponent } from './user-list/user-list.component';
import{UsersDataService} from './services/users-data.service';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SortnamePipe } from './sortname.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { ForgotPasswordUserComponent } from './forgot-password-user/forgot-password-user.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponentComponent,
    EditUserCompnentComponent,
    DeleteUserComponentComponent,
    UserListComponent,
    TableListViewUserListComponent,
    PageNotFoundComponent,
    SortnamePipe,
    FilterPipe,
    LoginComponent,
    DashboardComponent,
    UserSignupComponent,
    UserSignInComponent,
    ForgotPasswordUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgpSortModule,
    NgbModule,
    BrowserAnimationsModule 
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
