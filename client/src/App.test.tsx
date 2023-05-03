import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

describe('App', () => {
	test('renders homepage', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		);

		expect(screen.getByRole('heading', {name: /homepage/i})).toBeInTheDocument();
	});

	test('allows user to register', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		);

		userEvent.click(screen.getByRole('button', {name: /register/i}));

		expect(screen.getByRole('heading', {name: /register/i})).toBeInTheDocument();
	});

	test('calls addToSavedEvents function when user adds an event to saved events', () => {
		const addToSavedEvents = jest.spyOn(App.prototype, 'addToSavedEvents');

		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		);

		userEvent.click(screen.getByRole('button', {name: /save event/i}));

		expect(addToSavedEvents).toHaveBeenCalled();
	});
});
