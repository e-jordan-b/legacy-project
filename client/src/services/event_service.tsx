import {commonHeaders, fetchReq} from './services_common_data';
import {type EventType} from '../@types/EventType';

const getAllEvents = async (userId: string) => fetchReq(`events/${userId}`);

const addEvent = async (newEvent: EventType) => fetchReq('event', {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify(newEvent),
});

const userToJoinedList = async (userId: string, eventId: string, type: string) => fetchReq(`eventUser/${eventId}`, {
	method: 'POST',
	headers: {...commonHeaders},
	body: JSON.stringify({userId, eventId, type}),
});

export {
	getAllEvents,
	addEvent,
	userToJoinedList,
};
