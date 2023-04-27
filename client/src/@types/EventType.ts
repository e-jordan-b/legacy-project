export interface Event {
  _id: string;
  owner: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  coordinartes: number[];
  image: string;
  limitAttendees: number;
  invitees: string[];
  hideFrom: string[];
  joined: string[];
  announcements: string[];
  canceled: boolean;
  active: boolean;
  joining?: boolean;
  liked: boolean;
}