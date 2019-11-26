import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './userslist';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }
  getUsers(): Observable<User[]> {
    this.messageService.add('In UserService: fetched Users');
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    this.messageService.add(`In UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
}
}
