import { 
	ListMob,
	ListDesk,
	Title,
	ItemMob,
	Button,
	DeleteIcon,
	Wrapper,
	FlatWrapper,
	ItemDesk
} from 'ui/TrainingPage';
// import styled from 'styled-components';
import { ReactComponent as Flat } from '../../images/icons/Flat.svg';
import { ReactComponent as Del } from '../../images/icons/delete.svg';
import css from './TrainingList.module.css';
import { useDispatch } from 'react-redux';
import { addBookPlanning } from '../../redux/library/libraryOperation';
// import { Navigate } from 'react-router-dom';

function TrainingList({ books, startDate, endDate, booksDelete }) {
	const dispatch = useDispatch();

	const booksId = books.map(book => book._id);

	const data = {
		startDate: startDate,
		endDate: endDate,
		books: booksId,
	};

	const handleAddBookPlanning = () => {
		dispatch(addBookPlanning(data));
	};

	return (
		<>
			<Wrapper>
				<ListMob>
					{books?.map(({ _id, title, author, publishYear, pagesTotal }) => (
						<ItemMob key={_id}>
							<div style={{ display: 'flex' }}>
								<FlatWrapper>
									<Flat/>
								</FlatWrapper>
								<div style={{ padding: '0 25px 0 0' }}>{title}</div>
							</div>

							<div style={{ display: 'flex', margin: '0 0 0 35px' }}>
								<div
									style={{
										margin: '0 15px 14px 0',
										color: '#898F9F',
										width: '25%',
									}}
								>
									Автор:
								</div>
								<div>{author}</div>
							</div>
							<div style={{ display: 'flex', margin: '0 0 0 35px' }}>
								<div
									style={{
										margin: '0 15px 14px 0',
										color: '#898F9F',
										width: '25%',
									}}
								>
									Рік:
								</div>
								<div>{publishYear}</div>
							</div>
							<div style={{ display: 'flex', margin: '0 0 0 35px' }}>
								<div
									style={{
										marginRight: '15px',
										color: '#898F9F',
										width: '25%',
									}}
								>
									Стор.:
								</div>
								<div>{pagesTotal}</div>
							</div>

							<DeleteIcon>
								<Del className={css.delButton}/>
							</DeleteIcon>
						</ItemMob>
					))}

					<Button>Почати тренування</Button>
				</ListMob>
			</Wrapper>


{/* desk */}
			<ListDesk>
				<Title className="title__wrapper">
					<div>Назва книги</div>
					<div>Автор</div>
					<div>Рік</div>
					<div>Стор.</div>
				</Title>
				{/* <ListDesk> */}
				{books?.map(({ _id, title, author, publishYear, pagesTotal }) => (
					<ItemDesk key={_id}>
						<div className="title icon" style={{ display: 'flex' }}>
							<div style={{ marginRight: '15px' }}>
								<Flat />
							</div>
							<p>{title}</p>
						</div>
						<div className="author">{author}</div>
						<div className="year">{publishYear}</div>
						<div className="page">{pagesTotal}</div>
						<button
							className={css.delButton}
							type="button"
							onClick={() => booksDelete(_id)}
						>
							<Del className={css.svgDel} />
						</button>
					</ItemDesk>
				))}
				{books.length > 0 &&
				<Button type="button" onClick={handleAddBookPlanning}>
					Почати тренування
					</Button>}
			</ListDesk>
		</>
	);
}

export default TrainingList;
