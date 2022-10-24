import { useState } from 'react';
import Notiflix from 'notiflix';
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
	LoginButtonGoogle,
	LoginLink,
	RegistrationTextLink,
} from 'ui/AuthPage';

import { register } from 'redux/auth/authOperation';
import Modal from 'components/Modal/Modal';
import { ReactComponent as GoogleIcon } from '../../ui/AuthPage/Image/google-icon.svg';
import { ModalGoogleText } from 'ui/Modal/ModalGoogle.styled';
import { ButtonConteinerGoogle } from 'ui/Modal/ModalGoogle.styled';
import { ButtonReturn } from 'ui/Modal/ModalGoogle.styled';
import { ModalButtonGoogle } from 'ui/Modal/ModalGoogle.styled';
import { ModalConteinerGoogle } from 'ui/Modal/ModalGoogle.styled';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');
	const [isModal, setIsModal] = useState(false);

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
			Notiflix.Notify.failure('Перевір пароль, йолопе...');
			return;
		} else if (checkPassword === '') {
			Notiflix.Notify.failure('Перевір пароль, йолопе...');
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

	const toogleModal = () => {
		setIsModal(!isModal);
	};
	return (
		<>
			<LoginContainerBg>
				<LoginContainer>
					<LoginButtonGoogle type="button" onClick={toogleModal}>
						<GoogleIcon style={{ marginRight: '17' }} />
						Google
					</LoginButtonGoogle>

					{isModal && (
						<Modal toogleModal={toogleModal}>
							<ModalConteinerGoogle>
								<ModalGoogleText>увійти в акаунт можливо тільки якщо ви зареєстровані у додатку</ModalGoogleText>
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
