
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import Login from './Login';
import * as UserService from '../../services/user_service';

describe('Login', () => {
	it('should render a login form', () => {
		const {getByLabelText, getByText} = render(<Login />);

		// Check that the form has rendered
		expect(getByLabelText(/username/i)).toBeInTheDocument();
		expect(getByLabelText(/password/i)).toBeInTheDocument();
		expect(getByText(/submit/i)).toBeInTheDocument();
	});
	it('should enable submit button when username and password are filled in', () => {
		const {getByLabelText, getByText} = render(<Login />);

		const usernameInput = getByLabelText(/username/i);
		const passwordInput = getByLabelText(/password/i);
		fireEvent.change(usernameInput, {target: {value: 'john'}});
		fireEvent.change(passwordInput, {target: {value: 'password'}});

		expect(getByText(/submit/i)).toBeEnabled();
	});
	it('should call handleFormSubmit when the form is submitted', async () => {
		const {getByLabelText, getByText} = render(<Login />);

		const mockLoginUser = jest.fn();
		const func = jest.spyOn(UserService, 'loginUser').mockImplementation(mockLoginUser);

		const usernameInput = getByLabelText(/username/i);
		const passwordInput = getByLabelText(/password/i);
		fireEvent.change(usernameInput, {target: {value: 'john'}});
		fireEvent.change(passwordInput, {target: {value: 'password'}});

		const submitButton = getByText(/submit/i);
		await act(async () => {
			fireEvent.click(submitButton);
		});

		expect(func).toHaveBeenCalledWith('john', 'password');
	});
});
