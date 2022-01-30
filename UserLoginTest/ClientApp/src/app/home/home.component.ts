import { Component, Input, OnInit } from '@angular/core';
import { Convert, User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  @Input() currentUser: User;

  constructor(private userService: UserService) {

  }

  ngOnInit(){
    this.userService.GetCurrentUser().subscribe(
      (response:any) => {console.log(response);
        this.currentUser = response;
      });

  }

  logout(){
    this.userService.LogOut("logout");
    this.ngOnInit();
    location.reload();
  }

}
