import { UserService } from './../user.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [UserService]
})
export class NavMenuComponent {
  isExpanded = false;
  @Input() currentUser;

  constructor(private userService: UserService, private router:Router){}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout(){
   this.userService.LogOut("logout");
   location.reload();
   this.router.navigate['/home'];
  }
}
