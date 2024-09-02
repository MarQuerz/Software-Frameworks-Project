import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];

  ngOnInit() {
    // Fetch and display groups
  }

  createGroup(name: string) {
    // Implement group creation logic
  }
}
