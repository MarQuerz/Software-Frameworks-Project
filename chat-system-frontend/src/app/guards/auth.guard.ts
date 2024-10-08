import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Assuming you have an AuthService for authentication

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.getUser();
    if (this.authService.isLoggedIn() && user.role === 'user') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
