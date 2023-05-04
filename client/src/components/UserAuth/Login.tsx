import React, {useContext, useState} from 'react';
import Context from '../context/context';
import {Form, Button, Input} from 'antd';
import * as UserService from '../../services/user_service';
import './Auth.css';
import {Link} from 'react-router-dom';

const Login = () => {
	const {navigate} = useContext(Context); // SetAuthenticated
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const input = e.target.name;
		if (input === 'username') {
			setUsername(e.target.value);
		}

		if (input === 'password') {
			setPassword(e.target.value);
		}

		if (username !== '' && password !== '') {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}

	const handleFormSubmit = async () => {
		await UserService.loginUser(username, password);
		// .then(async(res) => {
		//     //await ActiveUserService.setActiveUser(res[0])
		// })
		// .then(() => {
		// 	navigate('/');
		// });
		navigate('/');
	};

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
						placeholder='Enter your username'
						onChange={handleInputChange}/>
				</Form.Item>
				<input name='chrome-autofill-dummy1' style={{display: 'none'}} disabled/>

				<Form.Item name='password' label='password' htmlFor='password'>
					<Input
						id='password'
						name='password'
						type='password'
						autoComplete='password'
						required={true}
						placeholder='Enter your password'
						onChange={handleInputChange}/>
				</Form.Item>
				<Form.Item wrapperCol={{offset: 8, span: 16}}>
					<Button type='primary' htmlType='submit'>
            Submit
					</Button>
				</Form.Item>
			</Form>
			{/* <Link to='/register'>Create an account</Link> */}
		</div>
	);
};

export default Login;
