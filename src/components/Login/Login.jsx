import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
	logIn,
	// loginWithGoogle
} from 'redux/auth/authOperation';
import {
	LoginContainer,
	LoginForm,
	LoginInput,
	LoginContainerBg,
	LoginLabel,
	LoginSubContainer,
	LoginButton,
	// LoginButtonGoogle,
	LoginLink,
} from 'ui/AuthPage';
// import GoogleAuth from 'components/GoogleAuth/GoogleAuth';
// import GoogleButton from 'components/GoogleButton/GoogleButton';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [isGoodle, setIsGoogle] = useState(null);

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
			<LoginContainerBg>
				<LoginContainer>
					{/* {isGoodle && <GoogleAuth markup={isGoodle} />} */}
					{/* <GoogleButton setMarkup={setIsGoogle} /> */}
					<LoginForm onSubmit={handleSubmit}>
						<LoginSubContainer>
							<LoginLabel htmlFor="email">Електронна адреса *</LoginLabel>

							<LoginInput
								id="email"
								value={email}
								type="text"
								name="email"
								placeholder="your@email.com"
								onChange={handleChange}
							/>
						</LoginSubContainer>
						<LoginSubContainer>
							<LoginLabel htmlFor="password">Пароль *</LoginLabel>

							<LoginInput
								id="password"
								value={password}
								type="password"
								name="password"
								placeholder="Пароль"
								onChange={handleChange}
							/>
						</LoginSubContainer>

						<LoginButton type="submit">Увійти</LoginButton>
						<LoginLink to="/register">Реєстрація</LoginLink>
					</LoginForm>
				</LoginContainer>
			</LoginContainerBg>
		</>
	);
};

export default Login;
