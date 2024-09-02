import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    // Replace with your actual authentication logic
    return !!localStorage.getItem('user');
  }
}
