import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Title } from '@angular/platform-browser';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(public auth: AuthService, private titleService: Title) { }

  ngOnInit() {
    this.auth.user$.map((usr: User) => {
      usr = this.user;
      console.log(usr);
      this.titleService.setTitle('Welcome Saar');
    }).subscribe();
  }

}
