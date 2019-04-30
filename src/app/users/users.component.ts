import {Component, OnInit} from '@angular/core';

/*Local and 3rd party imports*/
import {UserDataType} from '../user/user';
import {DataService} from '../data/data.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  listOfUsers: Observable<UserDataType[]>;
  errorMessage: string;

  constructor(public userDataService: DataService) {
    this.listOfUsers = userDataService
      .getUserData('https://jsonplaceholder.typicode.com/users')
      .pipe();
  }

}
