import { ListMob, ListDesk, Title, ItemMob, Button } from 'ui/TrainingPage';
import styled from 'styled-components';
import { ReactComponent as Flat } from '../../images/icons/Flat.svg';
import { ReactComponent as Del } from '../../images/icons/delete.svg';
import css from './TrainingList.module.css';
import { useDispatch } from 'react-redux';
import { addBookPlanning } from '../../redux/library/libraryOperation';

const DeleteIcon = styled.div`
	position: absolute;
	top: 20px;
	right: 0;
`;
const Wrapper = styled.div`
	display: block;

	@media screen and (min-width: 768px) {
		display: none;
	}
`;

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
			{/* Мобильная версия без стилей */}
			<Wrapper>
				<ListMob>
					{books?.map(({ _id, title, author, publishYear, pagesTotal }) => (
						<ItemMob key={_id}>
							<div style={{ display: 'flex' }}>
								<button>
									<Flat />
								</button>
								<div style={{ padding: '0 25px 0 0' }}>{title}</div>
							</div>

							<div style={{ display: 'flex', margin: '0 0 0 40px' }}>
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
							<div style={{ display: 'flex', margin: '0 0 0 40px' }}>
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
							<div style={{ display: 'flex', margin: '0 0 0 40px' }}>
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
								<Del />
							</DeleteIcon>
						</ItemMob>
					))}

					{/* <ItemMob>
                <div style={{display: 'flex'}}> 
                    <div style={{margin: '0 15px 12px 0'}}><Flat /></div>
                    <div style={{padding: '0 25px 0 0'}}>Deadline. Роман об управлении проектами.</div>
                </div>

                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div  style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <DeleteIcon style={{color:'red'}}><Del /></DeleteIcon>
            </ItemMob> */}

					{/* <ItemMob>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}><Flat /></div>
                    <div style={{padding: '0 25px 0 0'}}>5 Пороков команды. Притчи о лидерстве.</div>
                </div>

                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <DeleteIcon style={{color:'red'}}><Del /></DeleteIcon>
            </ItemMob> */}
					<Button>Почати тренування</Button>
				</ListMob>
			</Wrapper>

			<ListDesk>
				<Title className="title__wrapper">
					<div>Назва книги</div>
					<div>Автор</div>
					<div>Рік</div>
					<div>Стор.</div>
				</Title>
				{/* <ListDesk> */}
				{books?.map(({ _id, title, author, publishYear, pagesTotal }) => (
					<li
						key={_id}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							borderBottom: '1px solid #E0E5EB',
						}}
					>
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
					</li>
				))}
				<Button type="button" onClick={handleAddBookPlanning}>
					Почати тренування
				</Button>
			</ListDesk>
		</>
	);
}

export default TrainingList;
