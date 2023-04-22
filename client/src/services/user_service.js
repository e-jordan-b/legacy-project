const BASE_URL = 'http://localhost:3030';
const fetchReq = async (url, parameters={}) => {
  console.log(`${BASE_URL}/${url}`)
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

const loginUser = (username,  password) => fetchReq('login', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({username: username, password: password})
});

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

export {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
  addSavedEvent,
  removeSavedEvent,
  addJoinedEvent,
  removeJoinedEvent
}