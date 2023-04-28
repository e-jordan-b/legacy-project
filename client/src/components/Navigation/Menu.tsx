import { Link } from "react-router-dom";
import './Menu.css';
import {
  HomeFilled,
  PushpinFilled,
  PlusSquareFilled,
  HeartFilled,
 } from '@ant-design/icons';
import Context from "../context/context";
import { useContext, useState } from "react";
// import ModalComponent from "../UI/ModalComponent";
import CreateEvent from "../CreateEvent/CreateEvent";
import { Avatar } from "antd";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const {isLoading, activeUser} = useContext(Context);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
      setOpen(false);
  };

 return (
  <>
  <div className="menu-wrapper">
  <nav className="menu">
   <ul>
     <Link to="/" className="nav-item"><HomeFilled /><small>home</small></Link>
     <Link to="/mapview" className="nav-item"><PushpinFilled /><small>map</small></Link>
     <button onClick={showModal} className="nav-item create-button"><PlusSquareFilled /><small>new</small></button>
     <Link to="/myevents" className="nav-item"><HeartFilled /><small>my events</small></Link>
     <Link to={`/profile/${activeUser?.username}`} state={{id: activeUser?._id}} className="nav-item"> <Avatar src={isLoading ? '/blank-profile-picture.webp':`https://res.cloudinary.com/dyjtzcm9r/image/upload/v1682429215/${activeUser?.profilePicture}`}/></Link>
   </ul>
  </nav>
  <CreateEvent open={open} close={handleCancel} />
  </div>
  </>


 )
}

export default Menu;