import {commonHeaders, fetchReq } from "./services_common_data"
import { UserType } from "../@types/UserType"

const setActiveUser = async (user: UserType) => {
  return await fetchReq('set-active-user', {
  method: 'POST',
  headers: {...commonHeaders},
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

const getActiveUser = ():Promise<UserType> => fetchReq('get-active-user');

const deleteActiveUser = (username: string) => fetchReq('delete-active-user', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({username: username})
});

export {
 setActiveUser,
 getActiveUser,
 deleteActiveUser
}

