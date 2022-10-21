import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperation';
import GoogleButton from 'components/GoogleButton/GoogleButton';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleChange = e => {
		const { value } = e.target;
		if (e.target.name === 'email') {
			setEmail(value);
		}
		if (e.target.name === 'password') {
			setPassword(value);
		}
	};

	const handleSubmit = e => {
        e.preventDefault();
		dispatch(logIn({ email, password }));
		reset();
	};

	const reset = () => {
		setEmail('');
		setPassword('');
	};

	return (
		<>
			<GoogleButton />			
			<form onSubmit={handleSubmit}>
				<label>
					Електронна адреса *
					<input
						value={email}
						type="email"
						name="email"
						placeholder="your@email.com"
						required
						onChange={handleChange}
					/>
				</label>
				<label>
					Пароль *
					<input
						value={password}
						type="password"
						name="password"
						placeholder="Пароль"
						required
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Увійти</button>
				<Link to="/register">Реєстрація</Link>
			</form>
		</>
	);
};

export default Login;
