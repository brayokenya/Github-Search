import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: string;
  repos: any = [];
  user: any = [];

  constructor(
    public profileService: ProfileService,
    private httpclient: HttpClient
  ) {
    this.profileService.getprofileInfo().subscribe((res) => (this.user = res));
  }

  ngOnInit(): void {}
}
