import { useEffect, useContext, useState  } from "react";
import Context from "../context/context";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";


const ProfilePage = () => {

  const {events, users} = useContext(Context);

  const {state} = useLocation();
  const [user, setUser] = useState(null)


function findUserByID (id) {
  setUser(users.find(user => user._id === id));
}

useEffect(() => {
  findUserByID(state.id)
}, [])

return(
  <Layout>
  <div>Profile page</div>

  <div>{user ?
  <div>
    <img src={`/${user.profilePicture}`} alt="profile pic" />
  <p>{user.username}</p>
  </div>

  : <p>Loading...</p>}</div>
  </Layout>
)
}

export default ProfilePage;
