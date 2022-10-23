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
	AddButton,
} from 'ui/LibraryFilld';
import { ReactComponent as Flat } from './icons/Flat.svg';
// import { ReactComponent as Rating } from './icons/rating.svg'
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
			<div className="Wrapper">
				<LibraryTitle>Прочитано</LibraryTitle>
				{finishedReading.map(({ title, author, publishYear, pagesTotal, _id }) => (
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
								{/* <Value><Rating/></Value> */}
							</BookItem>
						</FilldList>
						<LibraryButton type="button">Резюме</LibraryButton>
					</LibraryWripperList>
				))}
			</div>
			<div>
				<LibraryTitle>Читаю</LibraryTitle>
				{currentlyReading.map(({ title, author, publishYear, pagesTotal, _id }) => (
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
				))}
			</div>
			<div>
				<LibraryTitle>Маю намір прочитати</LibraryTitle>
				{goingToRead.map(({ title, author, publishYear, pagesTotal,_id }) => (
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
				))}

				{/* <LibraryWripperList>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>5 Пороков команды.Притча о лидерстве.</BookTitle>
                    </BookName>
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Патрик Ленсиони</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2011</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>125</Value>
                            </BookItem>    
                        </FilldList>  
                        <AddButton type='button'>+++</AddButton>
                    
                </LibraryWripperList> */}
			</div>
		</>
	);
}

export default LibraryFilld;
