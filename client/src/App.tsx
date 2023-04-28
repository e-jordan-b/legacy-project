import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Register from './components/UserAuth/Register';
import Login from './components/UserAuth/Login';
import ProfilePage from './components/Pages/ProfilePage';
import { useEffect, useState } from 'react';
import Context from './components/context/context';
import HomePage from './components/Pages/HomePage';
import * as EventService from './services/event_service';
import * as UserService from './services/user_service';
//import * as ActiveUserService from './services/active_user_service';
import EventPage from './components/Pages/EventPage';
import MapPage from './components/Pages/MapPage';
import MyEventsPage from './components/Pages/MyEvents';
import { formatEvents } from './helpers/formatting_functions';
import { EventType } from './@types/EventType';
import { UserType } from './@types/UserType';

const App: React.FC = () => {

  const navigate = useNavigate();
  const [events, setEvents] = useState<EventType[] | null>(null);
  const [users, setUsers] = useState <UserType[] | null> (null);
  const [activeUser, setActiveUser] = useState<UserType | null> (null);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  function addToSavedEvents(eventId: string){
    if (activeUser) UserService.addSavedEvent(activeUser._id, eventId).then((data: UserType) => setActiveUser(data))
  }

  function removeSavedEvent(eventId: string){
    if (activeUser) UserService.removeSavedEvent(activeUser._id, eventId).then((data: UserType)=> setActiveUser(data))
  }

  function addToJoinedEvents(eventId: string){
    if (activeUser) {
      EventService.addUserToJoinedList(activeUser._id, eventId)
      UserService.addJoinedEvent(activeUser._id, eventId).then((data: UserType)=> setActiveUser(data))
    }
  }
  function removeJoinedEvent(eventId: string){
    if (activeUser) {
      EventService.removeUserFromJoinedList(activeUser._id, eventId)
      UserService.removeJoinedEvent(activeUser._id, eventId).then((data: UserType)=> setActiveUser(data))
    }
  }

  //Manually set for demonstartion
  // As stated in the README file in the main project folder,
  // if you added the mock-users and mock-events json files to your database
  // getting the active User will work as you will have an existent user with
  // id  "644116416da455b7fc0c8bba".
  // If you started clean this will give you an error. You can create a user
  // manually and then change the id here in the function.
  // In the future this would be dinamically set with an authentication process.
  async function getActiveUser() {
    setActiveUser(await UserService.getUserById("644116416da455b7fc0c8bba"))
   }

  function getAllUsers () {
    UserService.getAllUsers()
    .then((data: UserType[]) => { console.log(data, 'getAllUsers')
      setUsers(data)
    })
  }

   function getAllEvents () {
    if(activeUser){
      EventService.getAllEvents(activeUser._id)
      .then((data: EventType[]) => { console.log(data, 'getAllEvents')
        setEvents(formatEvents(activeUser, data))
      })
      .then(() => {
        // only when all the activeUser, the users and the events states
        // have been set the loading state will be set to false.
        setIsLoading(false)
      })
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  useEffect(()=> {
      if(users){
        getActiveUser()
      }
  }, [users])

  useEffect(() => {
    getAllEvents();
  }, [activeUser]);

  return (
    // Config provider from Ant-design
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8663F3',
            colorTextPlaceholder: '#8663F3'
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
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/profile/:username" element={<ProfilePage />}/>
      <Route path="/event/:eventtitle" element={<EventPage />}/>
      <Route path="/mapview" element={<MapPage />}/>
      <Route path="/myevents" element={<MyEventsPage />}/>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    </Context.Provider>
    </ConfigProvider>
  );
}

export default App;
