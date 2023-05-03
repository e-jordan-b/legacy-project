import React from 'react';
import ProfilePage from './ProfilePage';
import {render, screen} from '@testing-library/react';

describe('ProfilePage', () => {
	const mockEvents = [
		{
			id: 'event-1',
			title: 'Event 1',
			owner: 'user-1',
		},
		{
			id: 'event-2',
			title: 'Event 2',
			owner: 'user-2',
		},
	];

	const mockUsers = [
		{
			id: 'user-1',
			username: 'John',
			profilePicture: 'profile.jpg',
			friends: ['user-2'],
		},
		{
			id: 'user-2',
			username: 'Jane',
			profilePicture: 'profile.jpg',
			friends: ['user-1'],
		},
	];

	const mockActiveUser = {
		id: 'user-1',
		username: 'John',
	};
	it('should render a login form', () => {
		render(<ProfilePage/>);
		expect(screen.getByTestId('loading-component')).toBeInTheDocument();
	});
});
