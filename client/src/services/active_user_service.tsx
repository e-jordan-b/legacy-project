import {commonHeaders, fetchReq} from './services_common_data';
import {type UserType} from '../@types/UserType';

const setActiveUser = async (user: UserType) => fetchReq('set-active-user', {
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
		joinedEvents: user.joinedEvents}),
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const getActiveUser = async (): Promise<UserType> => fetchReq('get-active-user');

const deleteActiveUser = async (username: string) => fetchReq('delete-active-user', {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify({username}),
});

export {
	setActiveUser,
	getActiveUser,
	deleteActiveUser,
};

