import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  private searchedItem: string;
  private getUser;

  constructor(private registrationService: UserserviceService, private router: Router, private blogservice: BlogserviceService) {
  }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

  searchUser(searchedItem) {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.getUser = data;
      console.log(this.getUser);
    });
  }
  viewProfile(user1) {
    this.router.navigate(['viewprofile', user1]);
  }
  seeFollowers() {
    this.router.navigate(['connect/followers']);
  }

  seeFollowing() {
    this.router.navigate(['connect/following']);
  }
}
