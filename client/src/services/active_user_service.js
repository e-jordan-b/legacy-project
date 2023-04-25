const BASE_URL = 'http://localhost:3030';
const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}

const setActiveUser = async (user) => {
  return await fetchReq('set-active-user', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
    identifier: user._id,
    username: user.username,
    name: user.name,
    phone: user.phone,
    email: user.email,
    profilePicture: user.profilePicture,
    age: user.age,
    friends: user.friends,
    following: user.following,
    savedEvents: user.savedEvents,
    joinedEvents: user.joinedEvents})
});
}

const getActiveUser = () => fetchReq('get-active-user');

const deleteActiveUser = (username) => fetchReq('delete-active-user', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({username: username})
});

export {
 setActiveUser,
 getActiveUser,
 deleteActiveUser
}

