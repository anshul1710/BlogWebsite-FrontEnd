import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  private userId;
  private viewUser;
  private viewBlogs;
  private isFollowing = false;
  constructor(private route: ActivatedRoute, private registrationService: UserserviceService,
              private blogService: BlogserviceService, private ffService: FollowService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('userId'));
      this.userId = id;
    });
    this.registrationService.viewUser(this.userId).subscribe(data => this.viewUser = data);
    this.blogService.viewPost(this.userId).subscribe(data => this.viewBlogs = data);
    this.ffService.checkIfCurrentUserIsFollower(this.userId).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (data === 'true') {
        this.isFollowing = true;
      }
      console.log(data);
    });
  }

  followUser() {
    this.ffService.followThisUser(this.userId).subscribe(data => {
      this.isFollowing = true;
      console.log(this.isFollowing);
    });
  }

  unfollowUser() {
    this.ffService.unfollowThisUser(this.userId).subscribe(data => {
      this.isFollowing = false;
    });
  }
}
