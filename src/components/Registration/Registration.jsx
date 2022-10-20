import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperation';
import GoogleButton from './../GoogleButton/GoogleButton';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');

	const dispatch = useDispatch();

	const handelChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;

			case 'checkPassword':
				setCheckPassword(value);
				break;

			default:
				break;
		}
	};

	const handelSubmit = e => {
		e.preventDefault();
		if (password !== checkPassword) {
			alert('Перевір пароль, йолопе...');
			return;
		} else if (checkPassword === '') {
			alert('Перевір пароль, йолопе...');
			return;
		}
		dispatch(register({ name, email, password }));
		reset();
	};

	const reset = () => {
		setName('');
		setEmail('');
		setPassword('');
		setCheckPassword('');
	};

	return (
		<>
			<GoogleButton/>
			<form onSubmit={handelSubmit}>
				<label>
					Ім'я*
					<input
						onChange={handelChange}
						value={name}
						type="name"
						name="name"
						placeholder="..."
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
				<label>
					Електронна адреса*
					<input
						onChange={handelChange}
						value={email}
						type="email"
						name="email"
						placeholder="your@email.com"
						required
					/>
				</label>
				<label>
					Пароль*
					<input
						onChange={handelChange}
						value={password}
						type="password"
						name="password"
						placeholder="..."
						required
					/>
				</label>
				<label>
					Підтвердити пароль*
					<input
						onChange={handelChange}
						value={checkPassword}
						type="password"
						name="checkPassword"
						placeholder="..."
						required
					/>
				</label>
				<button type="submit"> Зареєструватися</button>
			</form>

			<div>
				<p> Ви вже з нами?</p>
				<Link to="/login"> login</Link>
			</div>
		</>
	);
};

export default Registration;
