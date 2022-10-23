import { useSelector } from 'react-redux';
import {
	LibraryTitle,
	LibraryWripperList,
	BookName,
	FilldList,
	BookItem,
	Heading,
	Value,
	LibraryButton,
	BookTitle,
} from 'ui/LibraryFilld';
import { ReactComponent as Flat } from './icons/Flat.svg';
import {
	getGoingToRead,
	getFinishedReading,
	getCurrentlyReading,
} from '../../../redux/library/librarySelector';

function LibraryFilld() {
	const goingToRead = useSelector(getGoingToRead);
	const finishedReading = useSelector(getFinishedReading);
	const currentlyReading = useSelector(getCurrentlyReading);

	return (
		<>
			{finishedReading.length > 0 && (
				<div className="Wrapper">
					<LibraryTitle>Прочитано</LibraryTitle>
					{finishedReading.map(
						({ title, author, publishYear, pagesTotal, _id }) => (
							<LibraryWripperList key={_id}>
								<BookName>
									<div>
										<Flat style={{ margin: '0 12px 0 0' }} />
									</div>
									<BookTitle>{title}</BookTitle>
								</BookName>

								<FilldList>
									<BookItem>
										<Heading>Автор:</Heading>
										<Value>{author}</Value>
									</BookItem>
									<BookItem>
										<Heading>Рік:</Heading>
										<Value>{publishYear}</Value>
									</BookItem>
									<BookItem>
										<Heading>Стор.:</Heading>
										<Value>{pagesTotal}</Value>
									</BookItem>
									<BookItem>
										<Heading>Рейтинг:</Heading>
									</BookItem>
								</FilldList>
								<LibraryButton type="button">Резюме</LibraryButton>
							</LibraryWripperList>
						)
					)}
				</div>
			)}
			{currentlyReading.length > 0 && (
				<div>
					<LibraryTitle>Читаю</LibraryTitle>
					{currentlyReading.map(
						({ title, author, publishYear, pagesTotal, _id }) => (
							<LibraryWripperList key={_id} style={{ margin: '0 0 16px 0' }}>
								<BookName>
									<div>
										<Flat style={{ margin: '0 12px 0 0' }} />
									</div>
									<BookTitle>{title}</BookTitle>
								</BookName>

								<FilldList>
									<BookItem>
										<Heading>Автор:</Heading>
										<Value>{author}</Value>
									</BookItem>
									<BookItem>
										<Heading>Рік:</Heading>
										<Value>{publishYear}</Value>
									</BookItem>
									<BookItem>
										<Heading>Стор.:</Heading>
										<Value>{pagesTotal}</Value>
									</BookItem>
								</FilldList>
							</LibraryWripperList>
						)
					)}
				</div>
			)}
			{goingToRead.length > 0 && (
				<div>
					<LibraryTitle>Маю намір прочитати</LibraryTitle>
					{goingToRead.map(
						({ title, author, publishYear, pagesTotal, _id }) => (
							<LibraryWripperList key={_id} style={{ margin: '0 0 16px 0' }}>
								<BookName>
									<div>
										<Flat style={{ margin: '0 12px 0 0' }} />
									</div>
									<BookTitle>{title}</BookTitle>
								</BookName>

								<FilldList>
									<BookItem>
										<Heading>Автор:</Heading>
										<Value>{author}</Value>
									</BookItem>
									<BookItem>
										<Heading>Рік:</Heading>
										<Value>{publishYear}</Value>
									</BookItem>
									<BookItem>
										<Heading>Стор.:</Heading>
										<Value>{pagesTotal}</Value>
									</BookItem>
								</FilldList>
							</LibraryWripperList>
						)
					)}
				</div>
			)}
		</>
	);
}

export default LibraryFilld;
