import logo from './logo.svg';
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
import EventPage from './components/Pages/EventPage';


function App() {
  const navigate = useNavigate();

  const [events, setEvents] = useState(null);
  const [users, setUsers] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function sortEvents (data) {
    data.sort(function(a,b){
      return new Date(a.date) - new Date(b.date) ;
    });
  }

  function parseDate (date) {
    let parsedDate = new Date( Date.parse(date))
    return parsedDate
  }

  function getAllEvents () {
    EventService.getAllEvents()
    .then(data => {
      data.forEach(el => {
        el.date = parseDate(el.date)
      });
      let now = new Date();
      let filteredFutureEvents = data.filter(el => el.date > now)
      sortEvents(filteredFutureEvents);
      setEvents(filteredFutureEvents)

    })
  }
  function getAllUsers () {
    UserService.getAllUsers()
    .then(data => {
      setUsers(data)
    })

  }

  function getActiveUser() {
    UserService.getUserById("644116416da455b7fc0c8bba")
    .then(data => {
      setActiveUser(data)
    })
    .then(() => {
      setIsLoading(false)}
      )
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [events])

  useEffect(() => {
    getActiveUser()
  }, [users])

  return (
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8663F3',
          },
        }}>
    <Context.Provider value={{navigate, events, isLoading, users, activeUser}}>
    <Routes>
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/profile/:username" element={<ProfilePage />}/>
    <Route path="/event/:eventtitle" element={<EventPage />}/>

    <Route path="/" element={<HomePage />}/>
    </Routes>
    </Context.Provider>
    </ConfigProvider>
  );
}

export default App;
