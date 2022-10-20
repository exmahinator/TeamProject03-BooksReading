import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logIn, loginWithGoogle } from 'redux/auth/authOperation';

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
            <button type="button" onClick={() => { dispatch(loginWithGoogle())}}>google</button>
			<form onSubmit={handleSubmit}>
				<label>
					Електронна адреса *
					<input
						value={email}
						type="text"
						name="email"
						placeholder="your@email.com"
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
