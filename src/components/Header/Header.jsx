import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getIsLoggedIn } from 'redux/auth/authSelector';
import { ReactComponent as Book } from '../../ui/Header/image/book.svg';
import { ReactComponent as Home } from '../../ui/Header/image/home.svg';
import { ReactComponent as Line } from '../../ui/Header/image/line.svg';
import { logOut } from 'redux/auth/authOperation';
import { getUserName, getAccessToken } from 'redux/auth/authSelector';
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

const Header = () => {
	const dispatch = useDispatch();
	const userName = useSelector(getUserName);
	const accessToken = useSelector(getAccessToken);
	const isLoggedIn = useSelector(getIsLoggedIn);
	const isMobile = useMediaQuery({
		query: '(max-width: 768px)',
	});

	const firstLetter = userName?.slice(0, 1).toUpperCase();

	return isLoggedIn ? (
		<HeaderContainerLogin>
			<Logo to="/">BR</Logo>
			{isLoggedIn && (
				<>
					<IncideContainer>
						{!isMobile && <FirstLetter>{firstLetter}M</FirstLetter>}
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
						{isMobile && <FirstLetter>{firstLetter}</FirstLetter>}
						<LogoutButton
							type="button"
							onClick={() => {
								dispatch(logOut(accessToken));
							}}
						>
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
						{isMobile && <FirstLetter>{firstLetter}</FirstLetter>}
						<LogoutButton
							type="button"
							onClick={() => {
								dispatch(logOut(accessToken));
							}}
						>
							Вихід
						</LogoutButton>
					</IncideContainer>
				</>
			)}
		</HeaderContainer>
	);
};

export default Header;