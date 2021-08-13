import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/magic-api/user";

  constructor(private httpClient:HttpClient) { }

  saveUser(user:User):Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.httpClient.post<User>(this.baseUrl,user,httpOptions);
  }

  verifyUser(uname:string,pwd:string):Observable<User[]>{
    console.log(uname,pwd);
    //check in REST API whether any User exists with given uname&pwd
    const loginCheckUrl = `http://localhost:8080/magic-api/user/search/findByLogin?user=${uname}&pwd=${pwd}`;
    
     return this.httpClient.get<GetResponseUser>(loginCheckUrl).
      pipe(map(response => response._embedded.booksBuyUsers));
  }
}

interface GetResponseUser{
  _embedded:{
    booksBuyUsers:User[]
  }
}