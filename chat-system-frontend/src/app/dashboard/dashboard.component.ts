import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userRole = this.authService.getUser().role;
  }
}
