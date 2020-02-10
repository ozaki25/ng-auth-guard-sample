import { Component } from '@angular/core';
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure,
} from 'firebaseui-angular';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    const authUser = signInSuccessData.authResult.additionalUserInfo.profile;
    this.authService.login({ authUser });
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    this.authService.logout();
    console.error(errorData);
  }
}
