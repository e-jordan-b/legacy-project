export interface UserType {
  _id: string;
  profilePicture: string;
  phone: string;
  email: string;
  age: number;
  friends: string[];
  following: string[];
  savedEvents: string[];
  joinedEvents: string[];
  username: string;
}
