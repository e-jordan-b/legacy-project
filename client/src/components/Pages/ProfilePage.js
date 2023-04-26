import { useEffect, useContext, useState  } from "react";
import Context from "../context/context";
import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Avatar, Button } from "antd";
import {SettingFilled, UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import EventList from "../EventList";
import './ProfilePage.css';
import LoadingComponent from "../UI/LoadingComponent";
import {Dropdown} from "antd";
import * as ActiveUserService from '../../services/active_user_service';
import * as UserService from '../../services/user_service';

const ProfilePage = (props) => {

  const {events, users, activeUser, setActiveUser, navigate} = useContext(Context);

  const {state} = useLocation();
  const [user, setUser] = useState(null)
  const [isProfileFromActiveUser, setIsProfileFromActiveUser] = useState(false)
  const [filteredOwnEvents, setFilteredOwnEvents] = useState(null)
  const [isFriend, setIsFriend] = useState();
  const [friends, setFriends] = useState()

async function findUserByID (id) {
  setUser(await users.find(user => user._id === id));
  if(activeUser._id == id) setIsProfileFromActiveUser(true)
}

function filterOwnEvents(){
  setFilteredOwnEvents(events.filter(event => event.owner === user._id))
}

useEffect(() => {

  if(users && activeUser){

    findUserByID(state.id)
  }
}, [users, activeUser, state])

useEffect(() => {
  if(user && events){
    if(user.friends.find(friend => friend == activeUser._id)){
      setIsFriend(true)
    }
    setFriends(user.friends.length)
    filterOwnEvents()
  }
}, [user, events, state])

const handleAddFriend = () => {
  setIsFriend(true)
  setFriends(friends+1)
  UserService.addFriend(activeUser._id, user._id)
}
const handleRemoveFriend = () => {
  setIsFriend(false)
  setFriends(friends-1)
  UserService.removeFriend(activeUser._id, user._id)
}

const handleLogout = async(username) => {
 await ActiveUserService.deleteActiveUser(username)
 await setActiveUser(null);
 navigate('/login');
}

const items=[
  {
    key:'1',
    label: (
      <Button onClick={()=>handleLogout(activeUser.username)}>Logout</Button>
    )
  }
]

return(
  <Layout>

  <div>{user ?
    <>
      <div className="user-details">
        <Avatar src={`https://res.cloudinary.com/dyjtzcm9r/image/upload/v1682429215/${user.profilePicture}`} size={80} alt="profile pic" />
        <p className="username">{user.username}</p>
        <div className="user-subdetails">
          <div className="user-friends">
            <p className="user-friends-number">{friends}</p>
            <p>friends</p>
          </div>
          {isProfileFromActiveUser ?
          <div className="config-buttons"><Button type="primary">EDIT PROFILE</Button>
          <Dropdown menu={{items}} placement="topLeft" trigger={['click']} arrow>
          <Button onClick={(e) => e.preventDefault()}><SettingFilled /></Button>
          </Dropdown>

          </div> :
          <>
          {isFriend ?
          <Button><UserDeleteOutlined onClick={handleRemoveFriend}/></Button>:
          <Button onClick={handleAddFriend}><UserAddOutlined /></Button>}
          </>


          }
        </div>
      </div>
      <div className="divider"></div>
      <div>
        {filteredOwnEvents && <EventList events={filteredOwnEvents} isEventFromOwner={isProfileFromActiveUser}/> }
      </div>
    </>

  : <LoadingComponent /> }
  </div>
  </Layout>
)
}

export default ProfilePage;
