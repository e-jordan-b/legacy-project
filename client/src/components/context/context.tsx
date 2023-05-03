import {createContext} from 'react';
import {type NavigateFunction} from 'react-router-dom';
import {type UserType} from '../../@types/UserType';
import {type EventType} from '../../@types/EventType';

type MyContextType = {
	navigate: NavigateFunction;
	// SetAuthenticated: (value: boolean) => void;
	setEvents: React.Dispatch<undefined | EventType[]> | undefined;
	events: EventType[] | undefined;
	isLoading: boolean;
	users: UserType[] | undefined;
	activeUser: UserType | undefined;
	getAllEvents: () => void;
	getActiveUser: () => void;
	setActiveUser: (user: UserType | undefined) => void;
	addToSavedEvents: (a: string) => void;
	removeSavedEvent: (a: string) => void;
	addToJoinedEvents: (a: string) => void;
	removeJoinedEvent: (a: string) => void;
	// SetQuery: React.Dispatch<string> | null;
	setQuery: (query: string) => void;
	query: string;
};

const Context = createContext<MyContextType>({
	navigate() {
		console.log('Hello World');
	},
	// SetAuthenticated: () => {},
	setEvents: undefined,
	events: undefined,
	isLoading: true,
	users: undefined,
	activeUser: undefined,
	getAllEvents() {
		console.log('Hello World');
	},
	getActiveUser() {
		console.log('Hello World');
	},
	setActiveUser() {
		console.log('Hello World');
	},
	addToSavedEvents() {
		console.log('Hello World');
	},
	removeSavedEvent() {
		console.log('Hello World');
	},
	addToJoinedEvents() {
		console.log('Hello World');
	},
	removeJoinedEvent() {
		console.log('Hello World');
	},
	setQuery() {
		console.log('Hello World');
	},
	query: '',
});

export default Context;
