import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperation';
import {
	LoginContainer,
	LoginForm,
	LoginInput,
	LoginContainerBg,
	LoginLabel,
	LoginSubContainer,
	LoginButton,
	LoginLink,
	LoginButtonGoogle,
} from 'ui/AuthPage';
import { ReactComponent as GoogleIcon } from '../../ui/AuthPage/Image/google-icon.svg';
import Modal from 'components/Modal/Modal';
import { ModalConteinerGoogle } from 'ui/Modal/ModalGoogle.styled';
import { ModalGoogleText } from 'ui/Modal/ModalGoogle.styled';
import { ButtonConteinerGoogle } from 'ui/Modal/ModalGoogle.styled';
import { ButtonReturn } from 'ui/Modal/ModalGoogle.styled';
import { ModalButtonGoogle } from 'ui/Modal/ModalGoogle.styled';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isModal, setIsModal] = useState(false);

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

	const toogleModal = () => {
		setIsModal(!isModal);
	};
	return (
		<>
			<LoginContainerBg>
				<LoginContainer>
					{/* <GoogleButton/> */}

					<LoginButtonGoogle type="button" onClick={toogleModal}>
						<GoogleIcon style={{ marginRight: '17' }} />
						Google
					</LoginButtonGoogle>

					{isModal && (
						<Modal toogleModal={toogleModal}>
							<ModalConteinerGoogle>
								<ModalGoogleText>
									увійти в акаунт можливо тільки якщо ви зареєстровані у додатку
								</ModalGoogleText>
								<ButtonConteinerGoogle>
									<ButtonReturn to="/register" onClick={toogleModal}>
										Повернутись
									</ButtonReturn>
									<ModalButtonGoogle href="https://bookread-backend.goit.global/auth/google">
										<GoogleIcon style={{ marginRight: '17' }} />
										Google
									</ModalButtonGoogle>
								</ButtonConteinerGoogle>
							</ModalConteinerGoogle>
						</Modal>
					)}

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
