import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import { getIsLoggedIn } from 'redux/auth/authSelector';
import { ReactComponent as Book } from '../../ui/Header/image/book.svg';
import { ReactComponent as Home } from '../../ui/Header/image/home.svg';
import { ReactComponent as Line } from '../../ui/Header/image/line.svg';
import { logOut } from 'redux/auth/authOperation';
import { getUserName, getAccessToken } from 'redux/auth/authSelector';
// import { getCurrentlyReading } from '../../redux/library/librarySelector';
import {
	LogoutButton,
	HeaderContainer,
	HeaderContainerLogin,
	LinkBook,
	LinkHome,
	IncideContainer,
	Logo,
	FirstLetter,
	UserName,
	LineStyle,
} from 'ui/Header';
import Modal from 'components/Modal/Modal';
import { ModalLogoutText } from 'ui/Modal/Modal.styled';
import { ButtonExit } from 'ui/Modal/Modal.styled';
import { ButtonLogout } from 'ui/Modal/Modal.styled';
import { ButtonConteiner } from 'ui/Modal/Modal.styled';
import { ModalConteiner } from 'ui/Modal/Modal.styled';
// import { userBooks } from "../../redux/library/libraryOperation";

const Header = () => {
	const [isModal, setIsModal] = useState(false);
	const dispatch = useDispatch();
	const userName = useSelector(getUserName);
	const accessToken = useSelector(getAccessToken);
	const isLoggedIn = useSelector(getIsLoggedIn);
	// const currentlyReading = useSelector(getCurrentlyReading);
	const isMobile = useMediaQuery({
		query: '(max-width: 768px)',
	});

	const toogleModal = () => {
		setIsModal(!isModal);
	};

	const firstLetter = userName?.slice(0, 1).toUpperCase();

	return isLoggedIn ? (
		<HeaderContainerLogin>
			<Logo to="/">BR</Logo>
			{isLoggedIn && (
				<>
					<IncideContainer>
						{!isMobile && <FirstLetter>{firstLetter}</FirstLetter>}
						{!isMobile && <UserName>{userName}</UserName>}
					</IncideContainer>
					<IncideContainer>
						<LinkBook to="/training">
							{/* Залишити! Це логіка для переходу на сторінку статистики, якщо тренування розпочали! */}
							{/* {currentlyReading?"/statistics":"/training"} */}
							<Book />
						</LinkBook>
						<LinkHome to="/library">
							<Home />
						</LinkHome>
						<LineStyle>
							<Line />
						</LineStyle>
						{isMobile && <FirstLetter>{firstLetter}</FirstLetter>}
						{isModal && (
							<Modal toogleModal={toogleModal}>
								<ModalConteiner>
								<ModalLogoutText>
									Якщо Ви вийдете з програми незбережені дані будуть втрачені
								</ModalLogoutText>
								<ButtonConteiner>
								<ButtonExit type="button" onClick={toogleModal}>Відміна</ButtonExit>
								<ButtonLogout type="button" onClick={() => { dispatch(logOut(accessToken)); toogleModal() }}>Вихід</ButtonLogout>
								</ButtonConteiner>
								</ModalConteiner>
							</Modal>
						)}
						<LogoutButton type="button" onClick={toogleModal}>
							Вихід
						</LogoutButton>
					</IncideContainer>
				</>
			)}
		</HeaderContainerLogin>
	) : (
		<HeaderContainer>
			<Logo to="/">BR</Logo>
			{isLoggedIn && (
				<>
					<IncideContainer>
						{!isMobile && <FirstLetter>{firstLetter}</FirstLetter>}
						{!isMobile && <UserName>{userName}</UserName>}
					</IncideContainer>
					<IncideContainer>
						<LinkBook to="/training">
							<Book />
						</LinkBook>
						<LinkHome to="/library">
							<Home />
						</LinkHome>
						<LineStyle>
							<Line />
						</LineStyle>
						{isModal && (
							<Modal toogleModal={toogleModal}>
								<ModalConteiner>
								<ModalLogoutText>
									Якщо Ви вийдете з програми незбережені дані будуть втрачені
								</ModalLogoutText>
								<ButtonConteiner>
								<ButtonExit type="button" onClick={toogleModal}>Відміна</ButtonExit>
								<ButtonLogout type="button" onClick={() => { dispatch(logOut(accessToken)); toogleModal() }}>Вихід</ButtonLogout>
								</ButtonConteiner>
								</ModalConteiner>
							</Modal>
						)}
					</IncideContainer>
				</>
			)}
		</HeaderContainer>
	);
};

export default Header;
