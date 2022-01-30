import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  providers: [UserService]
})
export class LoginScreenComponent implements OnInit {

  userModel: User = {userId: 0, userName: "", password: ""};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  Login(){
    this.userService.Login(this.userModel);
    this.userService.GetCurrentUser();
    location.reload();
  }

}
