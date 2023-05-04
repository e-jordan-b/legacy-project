
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Event from './Event';
import {BrowserRouter} from 'react-router-dom';
import {HeartOutlined, HeartFilled, EditFilled} from '@ant-design/icons';

describe('Event component', () => {
	const testEvent = {
		_id: '12345',
		owner: '67890',
		title: 'Example Event',
		description: 'This is an example event.',
		date: new Date('2023-05-20T10:30:00Z'),
		location: '123 Main Street, Anytown USA',
		coordinates: [42.1234, -71.5678],
		image: 'example-event.jpg',
		limitAttendees: 50,
		invitees: ['09876', '54321'],
		hideFrom: ['98765'],
		joined: ['45678', '23456'],
		announcements: ['Announcement 1', 'Announcement 2'],
		canceled: false,
		active: true,
		joining: true,
		liked: true,
	};
	it('renders event title corretly', () => {
		render(
			<BrowserRouter>
				<Event data={testEvent} />
			</BrowserRouter>,
		);
		const eventTitle = screen.queryByText(/Example Event/i);
		expect(eventTitle).toBeInTheDocument();
	});
	it('renders event location correctly', () => {
		render(
			<BrowserRouter>
				<Event data={testEvent} />
			</BrowserRouter>,
		);
		const eventLocation = screen.queryByText(/123 Main Street, Anytown USA/i);
		expect(eventLocation).toBeInTheDocument();
	});
	it('renders the heart fille button if the event is liked', () => {
		const {container, getByTestId} = render(
			<BrowserRouter>
				<Event data={testEvent}/>
			</BrowserRouter>,
		);
		expect(screen.getByTestId('heart-filled')).toBeInTheDocument();
	});
	it('renders the heart outlined button if the event is not liked', () => {
		testEvent.liked = false;
		const {container, getByTestId} = render(
			<BrowserRouter>
				<Event data={testEvent}/>
			</BrowserRouter>,
		);
		expect(screen.getByTestId('heart-outlined')).toBeInTheDocument();
	});
	it('renders the EditFilled icon if isEventFromOwner is true', () => {
		const {container} = render(
			<BrowserRouter>
				<Event data={testEvent} isEventFromOwner={true}/>
			</BrowserRouter>,
		);

		expect(screen.getByTestId('edit-filled')).toBeInTheDocument();
		expect(container.querySelector('heart-outlined')).not.toBeInTheDocument();
		expect(container.querySelector('heart-filled')).not.toBeInTheDocument();
	});
});
