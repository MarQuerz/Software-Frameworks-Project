import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.groups = groups);
  }

  createGroup(name: string): void {
    const newGroup: Group = { id: '', name, adminIds: [], memberIds: [], channelIds: [] };
    this.groupService.createGroup(newGroup).subscribe(group => this.groups.push(group));
  }

  deleteGroup(id: string): void {
    this.groupService.deleteGroup(id).subscribe(() => {
      this.groups = this.groups.filter(group => group.id !== id);
    });
  }
}
