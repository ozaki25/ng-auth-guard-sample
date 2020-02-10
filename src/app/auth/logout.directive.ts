import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Directive({ selector: '[appLogout]' })
export class LogoutDirective {
  @HostListener('click') onClick() {
    this.logout();
  }

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
