import { useSelector } from 'react-redux';
import { useContext } from 'react';
import {
	LibraryBooklistContainer,
	LibraryBooklistTitle,
	LibraryBooklistSubContainer,
	LibraryBooklistTable,
	LibraryBooklistRow,
	LibraryBooklistCell,
	LibraryBooklistNameCell,
	LibraryBooklistButton,
	LibraryControlMobileSection,
	LibraryControlTabletSection,
	// LibraryBooklistTabletHeader,
	// LibraryBooklistTabletBookname,
	// LibraryBooklistTabletArticle,
	// LibraryBooklistTabletAuthor,
	// LibraryBooklistTabletYear,
	// LibraryBooklistTabletPages,
	// LibraryBooklistTabletSubContainer,
	// LibraryBooklistTabletCombineContainer,
	LibraryBooklistTabletButton,
	LibraryBooklistTabletTable,
	LibraryBooklistTabletHead,
	LibraryBooklistTabletHeadCell,
	LibraryBooklistTabletBody,
	LibraryBooklistTabletBodyCell,
	LibraryBooklistTabletRow,
} from 'ui/LibraryFilld';
import {
	getGoingToRead,
	getFinishedReading,
	getCurrentlyReading,
} from '../../../redux/library/librarySelector';
import LibraryModal from '../LibraryModal/LibraryModal';

import Modal from 'components/Modal/Modal';
import ConteinerModal from 'ui/LibraryModal/ConteinerModal.styled';

import Rating from '@mui/material/Rating';
import { ReviewContext } from 'components/ReviewContext/ReviewContext';

function LibraryFilld() {
	const goingToRead = useSelector(getGoingToRead);
	const finishedReading = useSelector(getFinishedReading);
	const currentlyReading = useSelector(getCurrentlyReading);
	const {isModal, toogleModal} = useContext(ReviewContext);


	return (
		<>
			<LibraryControlTabletSection>
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Прочитав</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right>
										Стор.
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell colspan="2" ratingPadding>
										Рейтинг книги
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{/* <LibraryBooklistTabletRow>
									<LibraryBooklistTabletBodyCell
										colspan="2"
										booknamePadding
										tabletBooknameWidth
									>
										Very very very very very very very very very very very long
										name
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell authorPadding>
										Some author
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell right yearPadding>
										2000
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell right>
										200
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell ratingPadding>
										*****
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell buttonPadding>
										<LibraryBooklistTabletButton type="button">
											Резюме
										</LibraryBooklistTabletButton>
									</LibraryBooklistTabletBodyCell>
								</LibraryBooklistTabletRow> */}
								{finishedReading.map(
									({ title, author, publishYear, pagesTotal, _id, rating }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknamePadding
													tabletBooknameWidth
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell ratingPadding middle>
													<Rating name="read-only" value={rating} readOnly />
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell buttonPadding>
													<LibraryBooklistTabletButton
														type="button"
														onClick={() => toogleModal(_id)}
													>
														Резюме
													</LibraryBooklistTabletButton>

													{isModal === _id && (
														<Modal toogleModal={toogleModal}>
															<ConteinerModal>
																<LibraryModal toogleModal={toogleModal} />
															</ConteinerModal>
														</Modal>
													)}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
									}
								)}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
				)}
				{currentlyReading.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>Читаю</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Стор.
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{currentlyReading.map(
									({ title, author, publishYear, pagesTotal, _id }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknameFullPadding
													tabletBooknameWidth
													orange
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right pagesPadding>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
									}
								)}
								{/* <LibraryBooklistTabletRow>
									<LibraryBooklistTabletBodyCell
										colspan="2"
										booknameFullPadding
										tabletBooknameWidth
										orange
									>
										Google
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell authorPadding>
										GoogleAuthor
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell right yearPadding>
										2000
									</LibraryBooklistTabletBodyCell>
									<LibraryBooklistTabletBodyCell right pagesPadding>
										200
									</LibraryBooklistTabletBodyCell>
								</LibraryBooklistTabletRow> */}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
				)}
				{goingToRead.length > 0 && (
					<LibraryBooklistContainer tabletSize>
						<LibraryBooklistTitle tabletSize>
							Маю намір прочитати
						</LibraryBooklistTitle>
						<LibraryBooklistTabletTable>
							<LibraryBooklistTabletHead>
								<tr>
									<LibraryBooklistTabletHeadCell colspan="2">
										Назва книги
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell authorPadding>
										Автор
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right yearPadding>
										Рік
									</LibraryBooklistTabletHeadCell>
									<LibraryBooklistTabletHeadCell right pagesPadding>
										Стор.
									</LibraryBooklistTabletHeadCell>
								</tr>
							</LibraryBooklistTabletHead>
							<LibraryBooklistTabletBody>
								{goingToRead.map(
									({ title, author, publishYear, pagesTotal, _id }) => {
										return (
											<LibraryBooklistTabletRow key={_id}>
												<LibraryBooklistTabletBodyCell
													colspan="2"
													booknameFullPadding
													tabletBooknameWidth
												>
													{title}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell authorPadding>
													{author}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right yearPadding>
													{publishYear}
												</LibraryBooklistTabletBodyCell>
												<LibraryBooklistTabletBodyCell right pagesPadding>
													{pagesTotal}
												</LibraryBooklistTabletBodyCell>
											</LibraryBooklistTabletRow>
										);
									}
								)}
							</LibraryBooklistTabletBody>
						</LibraryBooklistTabletTable>
					</LibraryBooklistContainer>
				)}
			</LibraryControlTabletSection>

			<LibraryControlMobileSection>
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Прочитано</LibraryBooklistTitle>
						{finishedReading.map(
							({ title, author, publishYear, pagesTotal, _id, rating }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell middle>
														Рейтинг:
													</LibraryBooklistCell>
													<LibraryBooklistCell middle>
														<Rating name="read-only" value={rating} readOnly />
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
										<LibraryBooklistButton
											type="button"
											onClick={() => toogleModal(_id)}
										>
											Резюме
										</LibraryBooklistButton>

										{isModal === _id && (
											<Modal toogleModal={toogleModal}>
												<ConteinerModal>
													<LibraryModal toogleModal={toogleModal} />
												</ConteinerModal>
											</Modal>
										)}
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
				{currentlyReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Читаю</LibraryBooklistTitle>
						{currentlyReading.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell orange colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
				{goingToRead.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Маю намір прочитати</LibraryBooklistTitle>
						{goingToRead.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
											<tbody>
												<LibraryBooklistRow>
													<LibraryBooklistNameCell colspan="2">
														{title}
													</LibraryBooklistNameCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Автор:</LibraryBooklistCell>
													<LibraryBooklistCell>{author}</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рік:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{publishYear}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
												<LibraryBooklistRow>
													<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
													<LibraryBooklistCell>
														{pagesTotal}
													</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
			</LibraryControlMobileSection>

			{/* <LibraryModal /> */}
		</>
	);
}

export default LibraryFilld;
