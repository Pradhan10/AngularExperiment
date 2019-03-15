import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*Local imports and 3rd party lib imports*/
import { UserDataType } from '../user/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserData(customUrl: string): Observable<UserDataType[]> {
    return this.http.get<UserDataType[]>(customUrl);
  }
}
