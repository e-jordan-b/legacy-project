import {type UserType} from '../@types/UserType';
import {type EventType} from '../@types/EventType';

export function sortEvents(data: EventType[]) {
	data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function parseDate(date: Date) {
	const dateString = date.toString();
	const parsedDate = new Date(Date.parse(dateString));
	return parsedDate;
}

function getLikedEvents(activeUser: UserType, eventId: string) {
	if (activeUser.savedEvents.length > 0) {
		if (activeUser.savedEvents.find(savedEvent => savedEvent === eventId)) {
			return true;
		}

		return false;
	}

	return false;
}

function getJoinedEvents(activeUser: UserType, eventId: string) {
	if (activeUser.joinedEvents.length > 0) {
		if (activeUser.joinedEvents.find(joinedEvent => joinedEvent === eventId)) {
			return true;
		}

		return false;
	}

	return false;
}

export function formatEvents(activeUser: UserType, data: EventType[]) {
	data.forEach(el => {
		el.liked = getLikedEvents(activeUser, el._id);
		el.joining = getJoinedEvents(activeUser, el._id);
		el.date = parseDate(el.date);
	});
	const now = new Date();
	const filteredFutureEvents = data.filter(el => el.date > now);
	sortEvents(filteredFutureEvents);
	return filteredFutureEvents;
}
