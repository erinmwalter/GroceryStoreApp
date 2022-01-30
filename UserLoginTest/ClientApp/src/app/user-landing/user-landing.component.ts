import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
  providers: [UserService]
})
export class UserLandingComponent implements OnInit {

  @Input() currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response:any) => {this.currentUser = response;}
    );
  }

}
