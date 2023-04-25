const BASE_URL = 'http://localhost:3030';
const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => {
    console.log(response)
    return response.json()
  })
  .catch(err => console.log(err))
}


const registerUser = (username, age, password) => fetchReq('register', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({username: username, age: age, password: password})
});

const loginUser = (username,  password) => fetchReq(`login/${username}/${password}`);

const getUserById = (userId) => fetchReq(`user/${userId}`);

const getAllUsers = () => fetchReq('users');

const addSavedEvent = (userId, eventId) => {
  return fetchReq(`add-saved-event/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeSavedEvent = (userId, eventId) => {
  return fetchReq(`remove-saved-event/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addJoinedEvent = (userId, eventId) => {
  return fetchReq(`add-joined-event/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeJoinedEvent = (userId, eventId) => {

  return fetchReq(`remove-joined-event/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addFriend = (activeUserId, friendUserId) => {

  return fetchReq(`add-friend/`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({activeUserId: activeUserId, friendUserId:friendUserId})
});}

const removeFriend = (activeUserId, friendUserId) => {
  return fetchReq(`remove-friend/`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({activeUserId: activeUserId, friendUserId:friendUserId})
});}


export {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
  addSavedEvent,
  removeSavedEvent,
  addJoinedEvent,
  removeJoinedEvent,
  addFriend,
  removeFriend
}