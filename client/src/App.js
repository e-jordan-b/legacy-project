import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Router, Routes, Route} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Register from './components/UserAuth/Register';
import Login from './components/UserAuth/Login';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8663F3',
          },
        }}>
    <Routes>
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/profile/:username" element={<ProfilePage />}/>
    </Routes>
    </ConfigProvider>
  );
}

export default App;
