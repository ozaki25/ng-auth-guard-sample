import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from './auth.actions';
import { selectIsLoggedIn } from './auth.state';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store<{}>) {}

  login() {
    this.store.dispatch(login());
  }

  logout() {
    this.store.dispatch(logout());
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn);
  }
}
