import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    
  }

  inactive(id: number){
    this.userService.setToInActive(id);
  }

}
