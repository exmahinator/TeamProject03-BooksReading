import { AddBook, LibraryInfo } from 'components/Library';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getGoingToRead,
	getFinishedReading,
	getCurrentlyReading,
} from 'redux/library/librarySelector';
import { Section, Container } from 'ui/BasicStyles';
import {
	LibraryContainer,
	InfoMobileLink,
	LibraryMobileButton,
	LibraryTabletContainer,
} from 'ui/LibraryPage';
import LibraryFilld from '../components/Library/LibraryFilld/LibraryFilld';
import { userBooks, getBookPlanning } from '../redux/library/libraryOperation';
import { getAccessToken } from '../redux/auth/authSelector';
import { useEffect } from 'react';


export const LibraryPage = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(getAccessToken);
	const goingToRead = useSelector(getGoingToRead).length;
	const finishedReading = useSelector(getFinishedReading).length;
	const currentlyReading = useSelector(getCurrentlyReading).length;
	const [toggle, setToggle] = useState(true);
	const togglePage = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		if (!accessToken) {
			return;
		}
		setTimeout(() => {
			dispatch(userBooks());
			// тут запит на бек, тому що в запиті userBooks не приходить currentlyReading
			dispatch(getBookPlanning())
		});
	}, [accessToken, dispatch]);

	// useEffect(() => {
	// 	if (!accessToken) {
	// 		return;
	// 	}
	// 	setTimeout(() => {
	// 		dispatch(userBooks());
	// 		// тут запит на бек, тому що в запиті userBooks не приходить currentlyReading
	// 		dispatch(getBookPlanning())
	// 	});
	// }, [accessToken, dispatch]);

	return (
		<Section>
			<Container>
				<LibraryContainer>
					{toggle && (
						<>
							<InfoMobileLink
								disabled={!toggle}
								onClick={togglePage}
								linkstyle="true"
							>
								<svg
									width="24"
									height="12"
									viewBox="0 0 24 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.274948 6.68502C0.275228 6.68531 0.275463 6.68565 0.275791 6.68594L5.17442 11.7182C5.54141 12.0952 6.13498 12.0938 6.50028 11.7149C6.86553 11.3361 6.86412 10.7234 6.49714 10.3463L3.2082 6.96774L23.0625 6.96774C23.5803 6.96774 24 6.53448 24 6C24 5.46552 23.5803 5.03226 23.0625 5.03226L3.20825 5.03226L6.49709 1.65368C6.86408 1.27664 6.86548 0.663918 6.50023 0.285095C6.13494 -0.0938247 5.54131 -0.0951303 5.17437 0.281805L0.275745 5.31407C0.275463 5.31436 0.275228 5.31469 0.2749 5.31498C-0.0922724 5.69328 -0.0910993 6.30799 0.274948 6.68502Z"
										fill="#FF6B08"
									/>
								</svg>
							</InfoMobileLink>
							<AddBook />
						</>
					)}
					{goingToRead === 0 && <LibraryInfo />}
					{!toggle && (
						<>
							<LibraryFilld />
							<LibraryMobileButton onClick={togglePage} type="button">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1999 7.19998H8.80002V0.799949C8.80002 0.358446 8.44158 0 7.99993 0C7.55842 0 7.19998 0.358446 7.19998 0.799949V7.19998H0.799949C0.358446 7.19998 0 7.55842 0 7.99993C0 8.44158 0.358446 8.80002 0.799949 8.80002H7.19998V15.1999C7.19998 15.6416 7.55842 16 7.99993 16C8.44158 16 8.80002 15.6416 8.80002 15.1999V8.80002H15.1999C15.6416 8.80002 16 8.44158 16 7.99993C16 7.55842 15.6416 7.19998 15.1999 7.19998Z"
										fill="white"
									/>
								</svg>
							</LibraryMobileButton>
						</>
					)}
				</LibraryContainer>
				<LibraryTabletContainer>
					<AddBook />
					{goingToRead === 0 &&
					currentlyReading === 0 &&
					finishedReading === 0 ? (
						<LibraryInfo />
					) : (
						<LibraryFilld />
					)}
				</LibraryTabletContainer>
			</Container>
		</Section>
	);
};
