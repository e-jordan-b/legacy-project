import { createContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { User } from '../../@types/UserType';
import { Event } from '../../@types/EventType';

interface MyContextType {
  navigate: NavigateFunction;
  // setAuthenticated: (value: boolean) => void;
  setEvents: React.Dispatch<null | Event[]> | null;
  events: Event[] | null
  isLoading: boolean;
  users: User[] | null
  activeUser: User | null;
  getAllEvents: () => void;
  getActiveUser: () => void;
  setActiveUser: (user: User) => void
  addToSavedEvents: (a: string) => void;
  removeSavedEvent: (a: string) => void;
  addToJoinedEvents: (a: string) => void;
  removeJoinedEvent: (a: string) => void;
  setQuery: React.Dispatch<string> | null;
  query: string
}

const Context = createContext<MyContextType>({
  navigate: () => {},
  // setAuthenticated: () => {},
  setEvents: null,
  events: null,
  isLoading: true,
  users: null,
  activeUser: null,
  getAllEvents: () => {},
  getActiveUser: () => {},
  setActiveUser: () => {},
  addToSavedEvents: () => {},
  removeSavedEvent: () => {},
  addToJoinedEvents: () => {},
  removeJoinedEvent: () => {},
  setQuery: null,
  query: '',
});

export default Context;