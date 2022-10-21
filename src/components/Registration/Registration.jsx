import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	LoginContainer,
	LoginForm,
	LoginInput,
	LoginContainerBg,
	LoginLabel,
	LoginSubContainer,
	LoginButton,
	RegistrationContainerLink,
	// LoginButtonGoogle,
	LoginLink,
	RegistrationTextLink,
} from 'ui/AuthPage';

import { register } from 'redux/auth/authOperation';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');

	const dispatch = useDispatch();

	const handelChange = ({ target: { name, value } }) => {
		// todo значения что пропишут пользователи
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
			<LoginContainerBg>
				<LoginContainer>
					<button type="button">Google</button>
					<LoginForm onSubmit={handelSubmit}>
						<LoginSubContainer>
							<LoginLabel htmlFor="name">Ім'я*</LoginLabel>
							<LoginInput
								id="name"
								onChange={handelChange}
								value={name}
								type="name"
								name="name"
								placeholder="..."
							/>
						</LoginSubContainer>

						<LoginSubContainer>
							<LoginLabel htmlFor="email">Електронна адреса*</LoginLabel>
							<LoginInput
								id="email"
								onChange={handelChange}
								value={email}
								type="email"
								name="email"
								placeholder="your@email.com"
							/>
						</LoginSubContainer>

						<LoginSubContainer>
							<LoginLabel htmlFor="password">Пароль*</LoginLabel>
							<LoginInput
								id="password"
								onChange={handelChange}
								value={password}
								type="password"
								name="password"
								placeholder="..."
							/>
						</LoginSubContainer>

						<LoginSubContainer>
							<LoginLabel htmlFor="checkPassword">
								Підтвердити пароль*
							</LoginLabel>
							<LoginInput
								id="checkPassword"
								onChange={handelChange}
								value={checkPassword}
								type="password"
								name="checkPassword"
								placeholder="..."
							/>
						</LoginSubContainer>

						<LoginButton type="submit"> Зареєструватися</LoginButton>
					</LoginForm>

					<RegistrationContainerLink>
						<RegistrationTextLink> Ви вже з нами?</RegistrationTextLink>
						<LoginLink to="/login">Увійти</LoginLink>
					</RegistrationContainerLink>
				</LoginContainer>
			</LoginContainerBg>
		</>
	);
};

export default Registration;
