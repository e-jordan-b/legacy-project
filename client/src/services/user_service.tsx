import {commonHeaders, fetchReq } from "./services_common_data"


const registerUser = (username: string, age: number, password: string) => fetchReq('register', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({username: username, age: age, password: password})
});

const loginUser = (username: string,  password: string) => fetchReq(`login/${username}/${password}`);

const getUserById = (userId: string) => fetchReq(`user/${userId}`);

const getAllUsers = () => fetchReq('users');

const addSavedEvent = (userId: string , eventId: string) => {
  return fetchReq(`add-saved-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeSavedEvent = (userId: string, eventId: string) => {
  return fetchReq(`remove-saved-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addJoinedEvent = (userId: string, eventId: string) => {
  return fetchReq(`add-joined-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const removeJoinedEvent = (userId: string, eventId: string) => {
  return fetchReq(`remove-joined-event/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
});}

const addFriend = (activeUserId: string, friendUserId: string) => {
  return fetchReq(`add-friend/`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({activeUserId: activeUserId, friendUserId:friendUserId})
});}

const removeFriend = (activeUserId: string, friendUserId: string) => {
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