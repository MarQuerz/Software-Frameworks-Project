export interface Group {
    id: string;
    name: string;
    adminIds: string[]; // Array of user IDs who are admins
    memberIds: string[]; // Array of user IDs who are members
    channelIds: string[]; // Array of channel IDs in this group
  }