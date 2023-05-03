import { createContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { UserType } from '../../@types/UserType';
import { EventType } from '../../@types/EventType';


interface MyContextType {
  navigate: NavigateFunction;
  // setAuthenticated: (value: boolean) => void;
  setEvents: React.Dispatch<null | EventType[]> | null;
  events: EventType[] | null;
  isLoading: boolean;
  users: UserType[] | null;
  activeUser: UserType | null;
  getAllEvents: () => void;
  getActiveUser: () => void;
  setActiveUser: (user: UserType | null) => void
  addToSavedEvents: (a: string) => void;
  removeSavedEvent: (a: string) => void;
  addToJoinedEvents: (a: string) => void;
  removeJoinedEvent: (a: string) => void;
  // setQuery: React.Dispatch<string> | null;
  setQuery: (query: string) => void;
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
  setQuery: () => {},
  query: '',
});

export default Context;