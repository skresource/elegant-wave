import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInterface } from './types/user.interace';

@Injectable({
  providedIn: 'root',
})
export class CustomlibUsersService {
  constructor() {}

  getUsers(): Observable<UserInterface[]> {
    return of([
      { id: '1', name: 'John' },
      { id: '2', name: 'Tung' },
    ]);
  }
}
