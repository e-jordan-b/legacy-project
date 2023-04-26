import {commonHeaders, fetchReq } from "./services_common_data"


const registerUser = (username, age, password) => fetchReq('register', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({username: username, age: age, password: password})
});

const loginUser = (username,  password) => fetchReq(`login/${username}/${password}`);

const getUserById = (userId) => fetchReq(`user/${userId}`);

const getAllUsers = () => fetchReq('users');

const addSavedEvent = (userId, eventId) => {
  return fetchReq(`add-saved-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeSavedEvent = (userId, eventId) => {
  return fetchReq(`remove-saved-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addJoinedEvent = (userId, eventId) => {
  return fetchReq(`add-joined-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeJoinedEvent = (userId, eventId) => {
  return fetchReq(`remove-joined-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addFriend = (activeUserId, friendUserId) => {
  return fetchReq(`add-friend/`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({activeUserId: activeUserId, friendUserId:friendUserId})
});}

const removeFriend = (activeUserId, friendUserId) => {
  return fetchReq(`remove-friend/`, {
  method: 'POST',
  headers: {...commonHeaders},
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