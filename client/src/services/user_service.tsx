import {commonHeaders, fetchReq} from './services_common_data';

const registerUser = async (username: string, age: number, password: string) => fetchReq('user', {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify({username, age, password}),
});

const loginUser = async (username: string, password: string) => fetchReq(`login/${username}/${password}`);

const getUserById = async (userId: string) => fetchReq(`user/${userId}`);

const getAllUsers = async () => fetchReq('users');

const postUserEvent = async (userId: string, eventId: string, type: string) => fetchReq('userEvent', {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify({userId, eventId, type}),
});

const postUserFriend = async (activeUserId: string, friendUserId: string, type: string) => fetchReq('userFriend/', {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify({activeUserId, friendUserId, type}),
});

export {
	registerUser,
	loginUser,
	getUserById,
	getAllUsers,
	postUserEvent,
	postUserFriend,
};
