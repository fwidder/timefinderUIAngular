import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from "./user";
import {USER } from "./mock-user";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = 'localhost:8080';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getUser(): Observable<User> {
    this.messageService.add('UserService: fetched user');
    return of(USER);
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
