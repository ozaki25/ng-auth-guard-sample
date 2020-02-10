import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Directive({ selector: '[appLogin]' })
export class LoginDirective {
  @HostListener('click') onClick() {
    this.login();
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
