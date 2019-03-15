import {Component, OnInit} from '@angular/core';

/*Local and 3rd party imports*/
import {UserDataType} from '../user/user';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  listOfUsers: UserDataType[];
  errorMessage: string;

  constructor(public userDataService: DataService) {
  }

}
