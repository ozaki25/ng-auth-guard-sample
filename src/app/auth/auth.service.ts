import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { login, logout } from './auth.actions';
import { selectAuthUser } from './auth.state';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private store: Store<{}>,
  ) {
    afAuth.authState.subscribe(authUser => {
      if (authUser) {
        this.login({ authUser });
      }
    });
  }

  login({ authUser }) {
    this.store.dispatch(login({ authUser }));
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  isAuthenticated$(): Observable<boolean> {
    return this.store.pipe(
      select(selectAuthUser),
      map(authUser => !!authUser?.uid),
    );
  }
}
