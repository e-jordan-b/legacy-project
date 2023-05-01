export interface UserType {
  _id: string;
  name?: string;
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
