import { Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {TestComponent} from './test/test.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {AddblogComponent} from './addblog/addblog.component';
import {EditblogComponent} from './editblog/editblog.component';
import {AllblogComponent} from './allblog/allblog.component';
import {ViewprofileComponent} from './viewprofile/viewprofile.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'myaccount', component: MyaccountComponent},
  {path : 'test', component: TestComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'addblog', component: AddblogComponent},
  {path : 'allblog', component: AllblogComponent},
  {path : 'viewprofile', component: ViewprofileComponent},
  {path : 'editblog/:id', component: EditblogComponent},
  {path: '**', redirectTo: 'home'}
];
