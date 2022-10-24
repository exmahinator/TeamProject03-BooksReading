import { useSelector } from 'react-redux';
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
	LibraryBooklistTableHead,
	LibraryBooklistTableBody,
	LibraryBooklistTableHeaders,
	LibraryBooklistTabletCell,
	LibraryBooklistTabletRow,
	LibraryBooklistTabletText,
	LibraryBooklistTabletHeader,
	LibraryBooklistTabletBookname,
	LibraryBooklistTabletInfo,
	LibraryBooklistTabletArticle,
	LibraryBooklistTabletAuthor,
	LibraryBooklistTabletYear,
	LibraryBooklistTabletPages,
	LibraryBooklistTabletSubContainer,
	LibraryBooklistTabletCombineContainer,
	LibraryBooklistTabletRating,
	LibraryBooklistTabletDoneContainer,
	LibraryBooklistTabletButton,
} from 'ui/LibraryFilld';
import {
	getGoingToRead,
	getFinishedReading,
	getCurrentlyReading,
} from '../../../redux/library/librarySelector';

function LibraryFilld() {
	const goingToRead = useSelector(getGoingToRead);
	const finishedReading = useSelector(getFinishedReading);
	const currentlyReading = useSelector(getCurrentlyReading);
	console.log(currentlyReading);

	return (
		<>
			<LibraryControlTabletSection>
				{/* {finishedReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Прочитано ПЛАНШЕТ</LibraryBooklistTitle>
						{finishedReading.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistSubContainer key={_id}>
										<LibraryBooklistTable>
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
												<LibraryBooklistCell>{publishYear}</LibraryBooklistCell>
											</LibraryBooklistRow>
											<LibraryBooklistRow>
												<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
												<LibraryBooklistCell>{pagesTotal}</LibraryBooklistCell>
											</LibraryBooklistRow>
											<LibraryBooklistRow>
												<LibraryBooklistCell>Рейтинг:</LibraryBooklistCell>
												<LibraryBooklistCell>* * * * *</LibraryBooklistCell>
											</LibraryBooklistRow>
										</LibraryBooklistTable>
										<LibraryBooklistButton type="button">
											Резюме
										</LibraryBooklistButton>
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
												<LibraryBooklistCell>{publishYear}</LibraryBooklistCell>
											</LibraryBooklistRow>
											<LibraryBooklistRow>
												<LibraryBooklistCell>Стор.:</LibraryBooklistCell>
												<LibraryBooklistCell>{pagesTotal}</LibraryBooklistCell>
											</LibraryBooklistRow>
										</LibraryBooklistTable>
									</LibraryBooklistSubContainer>
								);
							}
						)}
					</LibraryBooklistContainer>
				)} */}
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Прочитав</LibraryBooklistTitle>
						<LibraryBooklistTabletHeader>
							<LibraryBooklistTabletSubContainer noPadding>
								<LibraryBooklistTabletDoneContainer>
									<span>Назва книги</span>
								</LibraryBooklistTabletDoneContainer>
								<LibraryBooklistTabletDoneContainer shrinkedWidth>
									<span>Автор</span>
								</LibraryBooklistTabletDoneContainer>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer noPadding>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear>Рік</LibraryBooklistTabletYear>
									<span>Стор.</span>
								</LibraryBooklistTabletCombineContainer>
								<LibraryBooklistTabletRating>
									<span>Рейтинг</span>
								</LibraryBooklistTabletRating>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletHeader>
						{/* {goingToRead.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistTabletArticle key={_id}>
										<LibraryBooklistTabletSubContainer bookName>
											<LibraryBooklistTabletBookname>
												{title}
											</LibraryBooklistTabletBookname>
										</LibraryBooklistTabletSubContainer>
										<LibraryBooklistTabletSubContainer>
											<LibraryBooklistTabletAuthor>
												{author}
											</LibraryBooklistTabletAuthor>
											<LibraryBooklistTabletCombineContainer>
												<LibraryBooklistTabletYear>
													{publishYear}
												</LibraryBooklistTabletYear>
												<LibraryBooklistTabletPages>
													{pagesTotal}
												</LibraryBooklistTabletPages>
											</LibraryBooklistTabletCombineContainer>
										</LibraryBooklistTabletSubContainer>
									</LibraryBooklistTabletArticle>
								);
							}
						)} */}
						<LibraryBooklistTabletArticle>
							<LibraryBooklistTabletSubContainer bookDesktopName>
								<LibraryBooklistTabletBookname>
									Разработка ценностных предложений.
								</LibraryBooklistTabletBookname>
								<LibraryBooklistTabletAuthor shrinkedWidth>
									Флекс Остервальдер, Ив Пинье
								</LibraryBooklistTabletAuthor>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer noPadding shrinkedWidth>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear>2013</LibraryBooklistTabletYear>
									<LibraryBooklistTabletPages>368</LibraryBooklistTabletPages>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer noPadding shrinkedWidth>
								<LibraryBooklistTabletRating>
									<div> * * * * * </div>
									<LibraryBooklistTabletButton type="button">
										Резюме
									</LibraryBooklistTabletButton>
								</LibraryBooklistTabletRating>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletArticle>
						{/* <LibraryBooklistTabletArticle>
							<LibraryBooklistTabletSubContainer bookName>
								<LibraryBooklistTabletBookname>
									Разработка.
								</LibraryBooklistTabletBookname>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer>
								<LibraryBooklistTabletAuthor>
									Флекс Остервальд
								</LibraryBooklistTabletAuthor>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear>2013</LibraryBooklistTabletYear>
									<LibraryBooklistTabletPages>68</LibraryBooklistTabletPages>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletArticle> */}
					</LibraryBooklistContainer>
				)}
				{currentlyReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Читаю</LibraryBooklistTitle>
						<LibraryBooklistTabletHeader>
							<LibraryBooklistTabletSubContainer noPadding>
								<span>Назва книги</span>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer leftPadding>
								<span>Автор</span>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear bookYear>
										Рік
									</LibraryBooklistTabletYear>
									<span>Стор.</span>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletHeader>
						{currentlyReading.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistTabletArticle key={_id}>
										<LibraryBooklistTabletSubContainer bookName>
											<LibraryBooklistTabletBookname orange>
												{title}
											</LibraryBooklistTabletBookname>
										</LibraryBooklistTabletSubContainer>
										<LibraryBooklistTabletSubContainer>
											<LibraryBooklistTabletAuthor>
												{author}
											</LibraryBooklistTabletAuthor>
											<LibraryBooklistTabletCombineContainer>
												<LibraryBooklistTabletYear>
													{publishYear}
												</LibraryBooklistTabletYear>
												<LibraryBooklistTabletPages>
													{pagesTotal}
												</LibraryBooklistTabletPages>
											</LibraryBooklistTabletCombineContainer>
										</LibraryBooklistTabletSubContainer>
									</LibraryBooklistTabletArticle>
								);
							}
						)}
					</LibraryBooklistContainer>
				)}
				{goingToRead.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Маю намір прочитати</LibraryBooklistTitle>
						<LibraryBooklistTabletHeader>
							<LibraryBooklistTabletSubContainer noPadding bookName>
								<span>Назва книги</span>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer leftPadding>
								<span>Автор</span>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear bookYear>
										Рік
									</LibraryBooklistTabletYear>
									<span>Стор.</span>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletHeader>
						{goingToRead.map(
							({ title, author, publishYear, pagesTotal, _id }) => {
								return (
									<LibraryBooklistTabletArticle key={_id}>
										<LibraryBooklistTabletSubContainer bookName>
											<LibraryBooklistTabletBookname>
												{title}
											</LibraryBooklistTabletBookname>
										</LibraryBooklistTabletSubContainer>
										<LibraryBooklistTabletSubContainer>
											<LibraryBooklistTabletAuthor>
												{author}
											</LibraryBooklistTabletAuthor>
											<LibraryBooklistTabletCombineContainer>
												<LibraryBooklistTabletYear>
													{publishYear}
												</LibraryBooklistTabletYear>
												<LibraryBooklistTabletPages>
													{pagesTotal}
												</LibraryBooklistTabletPages>
											</LibraryBooklistTabletCombineContainer>
										</LibraryBooklistTabletSubContainer>
									</LibraryBooklistTabletArticle>
								);
							}
						)}
						{/* <LibraryBooklistTabletArticle>
							<LibraryBooklistTabletSubContainer bookName>
								<LibraryBooklistTabletBookname>
									Разработка ценностных предложений.
								</LibraryBooklistTabletBookname>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer>
								<LibraryBooklistTabletAuthor>
									Флекс Остервальдер, Ив Пинье
								</LibraryBooklistTabletAuthor>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear>2013</LibraryBooklistTabletYear>
									<LibraryBooklistTabletPages>368</LibraryBooklistTabletPages>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletArticle>
						<LibraryBooklistTabletArticle>
							<LibraryBooklistTabletSubContainer bookName>
								<LibraryBooklistTabletBookname>
									Разработка.
								</LibraryBooklistTabletBookname>
							</LibraryBooklistTabletSubContainer>
							<LibraryBooklistTabletSubContainer>
								<LibraryBooklistTabletAuthor>
									Флекс Остервальд
								</LibraryBooklistTabletAuthor>
								<LibraryBooklistTabletCombineContainer>
									<LibraryBooklistTabletYear>2013</LibraryBooklistTabletYear>
									<LibraryBooklistTabletPages>68</LibraryBooklistTabletPages>
								</LibraryBooklistTabletCombineContainer>
							</LibraryBooklistTabletSubContainer>
						</LibraryBooklistTabletArticle> */}
					</LibraryBooklistContainer>
				)}
			</LibraryControlTabletSection>

			<LibraryControlMobileSection>
				{finishedReading.length > 0 && (
					<LibraryBooklistContainer>
						<LibraryBooklistTitle>Прочитано</LibraryBooklistTitle>
						{finishedReading.map(
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
												<LibraryBooklistRow>
													<LibraryBooklistCell>Рейтинг:</LibraryBooklistCell>
													<LibraryBooklistCell>* * * * *</LibraryBooklistCell>
												</LibraryBooklistRow>
											</tbody>
										</LibraryBooklistTable>
										<LibraryBooklistButton type="button">
											Резюме
										</LibraryBooklistButton>
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
		</>
	);
}

export default LibraryFilld;
