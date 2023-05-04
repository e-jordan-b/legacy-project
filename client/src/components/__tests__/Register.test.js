import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import Register from '../UserAuth/Register';
import * as UserService from '../../services/user_service';

// Jest.mock('../../services/user_service', () => ({
//   registerUser: jest.fn(),
// }));

describe('Register component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const {getByLabelText, getByText} = render(<Register />);
    expect(getByLabelText('username')).toBeInTheDocument();
    expect(getByLabelText('Age')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByLabelText('Confirm password')).toBeInTheDocument();
    expect(getByText('SignIn')).toBeInTheDocument();
  });

  it('should submit the form with correct data', async () => {
    const {getByLabelText, getByText} = render(<Register />);

    const mockRegisterUser = jest.fn();
    const func = jest.spyOn(UserService, 'registerUser').mockImplementation(mockRegisterUser);

    fireEvent.change(getByLabelText('username'), {target: {value: 'testuser'}});
    fireEvent.change(getByLabelText('Age'), {target: {value: 25}});
    fireEvent.change(getByLabelText('Password'), {target: {value: 'testpassword'}});
    fireEvent.change(getByLabelText('Confirm password'), {target: {value: 'testpassword'}});

    // FireEvent.click(getByText('SignIn'));

    const submitButton = getByText(/SignIn/i);
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Const registerUserSpy = jest.spyOn(registerUser);
    expect(func).toHaveBeenCalledWith('testuser', 25, 'testpassword');
  });
});
