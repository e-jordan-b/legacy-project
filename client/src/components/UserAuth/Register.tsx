// D@ts-nocheck
import {Form, Button, Input} from 'antd';
import React, {useState} from 'react';
import {registerUser} from '../../services/user_service';
import {Link} from 'react-router-dom';

const Register = () => {
	const [username, setUsername] = useState('');
	const [userAge, setUserAge] = useState<number>(14);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const input = e.target.name;
		console.log(input);
		if (input === 'username') {
			setUsername(e.target.value);
		}

		if (input === 'userAge') {
			setUserAge(Number(e.target.value));
		}

		if (input === 'password') {
			setPassword(e.target.value);
		}

		if (input === 'confirmPassword') {
			setConfirmPassword(e.target.value);
		}

		if (username !== '' && password !== '' && confirmPassword !== '') {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}

	async function handleFormSubmit(e: React.ChangeEvent<HTMLInputElement>) {
		await registerUser(username, userAge, password);
		return false;
	}

	return (
		<div className='auth-wrapper'>
			<img className='logo' src='/imin-logo-text.png' alt='logo-text' />
			<Form
				name='control-ref'
				onFinish={handleFormSubmit}
			>
				<Form.Item name='username' label='username' htmlFor='username'>
					<Input
						id='username'
						name='username'
						type='text'
						autoComplete='username'
						required={true}
						placeholder='Choose a username'
						onChange={handleInputChange}/>
				</Form.Item>
				<Form.Item name='userAge' label='Age' htmlFor='userAge'>
					<Input
						id='userAge'
						name='userAge'
						type='number'
						autoComplete='user age'
						required={true}
						placeholder='Enter your age'
						// TODO: add min-max age
						onChange={handleInputChange} />
				</Form.Item>
				<Form.Item name='password' label='Password' htmlFor='password'>
					<Input
						id='password'
						name='password'
						type='password'
						autoComplete='password'
						required={true}
						placeholder='Enter a password'
						// TODO: add min-max age
						onChange={handleInputChange} />
				</Form.Item>
				<Form.Item label='Confirm password' name='confirmPassword' htmlFor='confirmPassword'>
					<Input id='confirmPassword'
						name='confirmPassword'
						type='password'
						autoComplete='confirm-password'
						required={true}
						placeholder='confirm your password'
						onChange={handleInputChange}/>
				</Form.Item>
				<Form.Item wrapperCol={{offset: 8, span: 16}}>
					<Button type='primary' htmlType='submit'>
            SignIn
					</Button>
				</Form.Item>
			</Form>
			{/* <Link to='/login'></Link> */}
		</div>
	);
};

export default Register;
