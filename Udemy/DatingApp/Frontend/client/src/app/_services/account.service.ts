import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import  { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

//singleton
//disposes after app closes
export class AccountService {
  baseUrl: string = "https://localhost:5001/api/";
  private currentAppUserSource = new ReplaySubject<User | null>(1);
  currentAppUser$ = this.currentAppUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + "account/login", model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('appUser', JSON.stringify(user));
          this.currentAppUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentAppUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('appUser');
    this.currentAppUserSource.next(null);
  }
}
