import { Link } from "react-router-dom";
import './Menu.css';
import {
  HomeFilled,
  PushpinFilled,
  PlusSquareFilled,
  HeartFilled } from '@ant-design/icons';
import Context from "../context/context";
import { useContext } from "react";

const Menu = () => {

  const {isLoading, activeUser} = useContext(Context);

 return (
  <div className="menu-wrapper">
   <nav className="menu">
    <ul>
      <Link to="/" className="nav-item"><HomeFilled /><small>home</small></Link>
      <Link to="/" className="nav-item"><PushpinFilled />map</Link>
      <button to="/" className="nav-item create-button"><PlusSquareFilled />new</button>
      <Link to="/" className="nav-item"><HeartFilled />my events</Link>
      <Link to="/" className="nav-item"> <img src={isLoading ? '/blank-profile-picture.webp':`/${activeUser.profilePicture}`} alt="user profile" /></Link>
    </ul>
   </nav>
   </div>
 )
}

export default Menu;