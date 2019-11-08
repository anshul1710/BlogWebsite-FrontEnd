import { Component, OnInit } from '@angular/core';
import {blog, BlogserviceService} from '../blogservice.service';
import {Router} from '@angular/router';
import {User, UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  user: User;
  // tslint:disable-next-line:new-parens
  private blog: blog = new class implements blog {
    Private = false;
    blogId: number;
    author: string;
    content: string;
    date: Date;
    title: string;
  };
  constructor(private blogService: BlogserviceService, private router: Router, private userservice: UserserviceService) { }
  ngOnInit() {
    this.userservice.getUser().subscribe( data => {
      console.log(data);
      this.user = data;
    });
  }

  addBlog() {
        this.blog.date = new Date();
        this.blog.author = this.user.name;
        console.log(this.blog);
        this.blogService.addBlogs(this.blog).subscribe(data => {
          alert('New Blog Added Successfully');
          this.router.navigate(['profile']);
        });
      }
}
