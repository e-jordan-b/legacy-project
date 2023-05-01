import {commonHeaders, fetchReq } from "./services_common_data"


const registerUser = (username: string, age: number, password: string) => fetchReq('user', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({username: username, age: age, password: password})
});

const loginUser = (username: string,  password: string) => fetchReq(`login/${username}/${password}`);

const getUserById = (userId: string) => fetchReq(`user/${userId}`);

const getAllUsers = () => fetchReq('users');

const postUserEvent = (userId: string , eventId: string, type: string) => {
  return fetchReq(`userEvent/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId, type: type})
});}

const postUserFriend = (activeUserId: string, friendUserId: string, type: string) => {
  return fetchReq(`userFriend/`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({activeUserId: activeUserId, friendUserId:friendUserId, type: type})
});}

export {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
  postUserEvent,
  postUserFriend
}