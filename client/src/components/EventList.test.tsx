import React from 'react';
import {render, screen} from '@testing-library/react';
import EventList from './EventList';

const events = [
	{
		_id: '123',
		owner: 'me',
		invitees: [],
		image: 'test img',
		title: 'Example Event',
		description: 'An example event',
		date: new Date(),
		location: 'Example location',
		coordinates: [0, 0],
		limitAttendees: 10,
		joined: [],
		announcements: [],
		canceled: false,
		active: true,
		liked: false,
		hideFrom: [],
	},
];

test('renders loading spinner when isLoading is true', () => {
	render(<EventList events={events} />);
	expect(screen.getByTestId('loading')).toBeInTheDocument();
});
