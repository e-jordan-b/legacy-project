import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import Register from './components/UserAuth/Register';
import Login from './components/UserAuth/Login';
import ProfilePage from './components/Pages/ProfilePage';
import React, {useEffect, useState} from 'react';
import Context from './components/context/context';
import HomePage from './components/Pages/HomePage';
import * as EventService from './services/event_service';
import * as UserService from './services/user_service';
// Import * as ActiveUserService from './services/active_user_service';
import EventPage from './components/Pages/EventPage';
import MapPage from './components/Pages/MapPage';
import MyEventsPage from './components/Pages/MyEvents';
import {formatEvents} from './helpers/formatting_functions';
import {type EventType} from './@types/EventType';
import {type UserType} from './@types/UserType';

const App: React.FC = () => {
	const navigate = useNavigate();
	const [events, setEvents] = useState<EventType[] | undefined>(undefined);
	const [users, setUsers] = useState <UserType[] | undefined>(undefined);
	const [activeUser, setActiveUser] = useState<UserType | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');

	function addToSavedEvents(eventId: string) {
		if (activeUser) {
			UserService.postUserEvent(activeUser._id, eventId, 'addSaved').then((data: UserType) => {
				setActiveUser(data);
			})
				.catch(Error);
		}
	}

	function removeSavedEvent(eventId: string) {
		if (activeUser) {
			UserService.postUserEvent(activeUser._id, eventId, 'removeSaved').then((data: UserType) => {
				setActiveUser(data);
			})
				.catch(Error);
		}
	}

	function addToJoinedEvents(eventId: string) {
		if (activeUser) {
			EventService.userToJoinedList(activeUser._id, eventId, 'add').catch(Error);
			UserService.postUserEvent(activeUser._id, eventId, 'addJoined').then((data: UserType) => {
				setActiveUser(data);
			})
				.catch(Error);
		}
	}

	function removeJoinedEvent(eventId: string) {
		if (activeUser) {
			EventService.userToJoinedList(activeUser._id, eventId, 'remove').catch(Error);
			UserService.postUserEvent(activeUser._id, eventId, 'removeJoined').then((data: UserType) => {
				setActiveUser(data);
			})
				.catch(Error);
		}
	}

	// Manually set for demonstartion
	// As stated in the README file in the main project folder,
	// if you added the mock-users and mock-events json files to your database
	// getting the active User will work as you will have an existent user with
	// id  "644116416da455b7fc0c8bba".
	// If you started clean this will give you an error. You can create a user
	// manually and then change the id here in the function.
	// In the future this would be dinamically set with an authentication process.
	async function getActiveUser() {
		// Const user: UserType = await UserService.getUserById('644a9a9d605307dc30844df2');
		// UserService.getUserById('644a9a9d605307dc30844df2')
		// 	.then((data: UserType) => {
		// 		setActiveUser(data);
		// 	})
		// 	.catch(Error);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment
		let user = await UserService.getUserById('644116416da455b7fc0c8bba');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		user = user[0];
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setActiveUser(user);
	}

	function getAllUsers() {
		UserService.getAllUsers()
			.then((data: UserType[]) => {
				console.log(data, 'getAllUsers');
				setUsers(data);
			})
			.catch(Error);
	}

	function getAllEvents() {
		if (activeUser) {
			console.log(activeUser, 'USEER');
			EventService.getAllEvents(activeUser._id)
				.then((data: EventType[]) => {
					console.log(data, 'getAllEvents');
					setEvents(formatEvents(activeUser, data));
				})
				.then(() => {
					// Only when all the activeUser, the users and the events states
					// have been set the loading state will be set to false.
					setIsLoading(false);
				})
				.catch((error: any) => {
					console.log(error, 'ERRORRR');
				});
		}
	}

	useEffect(() => {
		getAllUsers();
	}, []);

	useEffect(() => {
		if (users) {
			getActiveUser()
				.catch(Error);
		}
	}, [users]);

	useEffect(() => {
		getAllEvents();
	}, [activeUser]);

	return (
	// Config provider from Ant-design
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#8663F3',
					colorTextPlaceholder: '#8663F3',
				},
			}}>
			<Context.Provider
				value={{
					navigate,
					setEvents,
					events,
					isLoading,
					users,
					activeUser,
					getAllEvents,
					getActiveUser,
					setActiveUser,
					addToSavedEvents,
					removeSavedEvent,
					addToJoinedEvents,
					removeJoinedEvent,
					setQuery,
					query}}>
				<Routes>
					<Route path='/login' element={<Login />}/>
					<Route path='/register' element={<Register />}/>
					<Route path='/profile/:username' element={<ProfilePage />}/>
					<Route path='/event/:eventtitle' element={<EventPage />}/>
					<Route path='/mapview' element={<MapPage />}/>
					<Route path='/myevents' element={<MyEventsPage />}/>
					<Route path='/' element={<HomePage />}/>
				</Routes>
			</Context.Provider>
		</ConfigProvider>
	);
};

export default App;
