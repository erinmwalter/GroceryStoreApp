import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  providers: [UserService]
})
export class UpdateProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  currentUser: User;

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response:any) =>
      {
        console.log(response);
        this.currentUser = response;
    });
  }

  Update(){
    this.userService.UpdateUser(this.currentUser);
    this.router.navigate['/home'];
  }
}
