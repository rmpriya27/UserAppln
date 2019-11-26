import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User} from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
/*  user: User = {
    id: 1,
    name: 'Priya'
  };*/
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void{
    this.userService.getUsers().
    subscribe(users => this.users = users);
  }
}
