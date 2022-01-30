import { UserService } from './user.service';
import { Component } from '@angular/core';
import { User } from './User';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  currentUser: User;

  constructor(private userService: UserService){
    this.userService.GetCurrentUser().subscribe(
      (response:any) => {console.log(response);
        this.currentUser = response;
      }
    );
  }

}
