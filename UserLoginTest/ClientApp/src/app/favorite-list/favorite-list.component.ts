import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
  providers: [UserService]
})
export class FavoriteListComponent implements OnInit {

  @Input() currentUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetCurrentUser().subscribe(
      (response:any) => { console.log(response)
      this.currentUser = response;
      }
    )
  }

}
