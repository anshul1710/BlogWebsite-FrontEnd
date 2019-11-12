import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {blog, BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  private blog;
  private searchedItem: string;
  private getUser;
  private name;
  private role;
  private email;
  private password;
  private phoneNumber;
  private temp;
  private temp1;
  private temp2;
  private temp3;
  constructor(private registrationService: UserserviceService, private router: Router, private blogservice: BlogserviceService) {
  }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
      this.email = this.user.email;
      this.temp1 = this.user.email;
      this.name = this.user.name;
      this.temp = this.user.name;
      this.password = this.user.password;
      this.temp2 = this.user.password;
      this.phoneNumber = this.user.phoneNumber;
      this.temp3 = this.user.phoneNumber;
      this.role = this.user.role;
    });
    this.blogservice.getMyBlogs().subscribe(data => {
      this.blog = data;
      console.log(this.blog);
      Object.assign(this.blog).reverse();
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  editBlog(blog) {
    this.router.navigate(['editblog', blog.blogId]);
  }

  searchUser(searchedItem) {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.getUser = data;
    });
  }
}
