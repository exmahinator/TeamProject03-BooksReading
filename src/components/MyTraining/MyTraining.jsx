import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import {useSelector } from 'react-redux';
import Notiflix from 'notiflix';
// import {getIsLoggedIn} from '../../redux/selectors';
// import { addBookPlanning } from '../../redux/library/libraryOperation';
import { getGoingToRead } from '../../redux/library/librarySelector';
import { Wrapper, Title, BoxForm, Button } from './MyTraining.styled';
import TrainingList from '../TrainingList/TrainingList';

// "startDate": "2022-10-20",
//   "endDate": "2022-10-25",
//   "books": [
//     "635150dd3551fd60da50fed6", "507f1f77bcf86cd799439013"
//   ]

export default function MyTraining() {
	
	const [booksId, setBooksId] = useState([]);
	const [start, setStart] = useState(null);
	const [finish, setFinish] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [books, setBooks] = useState([]);

	// const books = useSelector(getIsLoggedIn);

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const goingToRead = useSelector(getGoingToRead);

	// Дата старту - готова до використання---
	const receiveDataFromStart = newValue => {
		setStart(newValue);
		const startDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
		setStartDate(startDate);
	};

	const receiveDataFromEnd = newValue => {
		setFinish(newValue);
		const endDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
		setEndDate(endDate);
	};

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setBooksId(value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		const addingToTraining = goingToRead.filter(book => book._id === booksId);

		if (books.some(({ _id }) => _id === addingToTraining[0]._id)) {
			Notiflix.Notify.failure('Ця книга вже є в твоєму списку, обирай іншу...');
			return;
		}
		setBooks([...books, ...addingToTraining]);

		console.log(books);
	};

	const hanleDelete = id => {
		return setBooks(books.filter(book => book._id !== id));
	};

	return (
		<Wrapper>
			<Title>Моє тренування</Title>
			<BoxForm>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label="Початок"
						value={start}
						disablePast={true}
						onChange={receiveDataFromStart}
						renderInput={params => <TextField {...params} />}
					/>
				</LocalizationProvider>

				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label="Завершення"
						value={finish}
						disablePast={true}
						onChange={receiveDataFromEnd}
						renderInput={params => <TextField {...params} />}
					/>
				</LocalizationProvider>

				<FormControl sx={{ width: 280 }}>
					<Select
						// multiple
						displayEmpty
						value={booksId}
						onChange={handleChange}
						input={<OutlinedInput />}
						MenuProps={MenuProps}
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem disabled value="">
							<em>Обрати книги з бібліотеки</em>
						</MenuItem>
						{goingToRead?.map(({ _id, title, author }) => (
							<MenuItem key={_id} value={_id}>
								{title} ({author})
							</MenuItem>
						))}
					</Select>

					<Button type="button" onClick={handleSubmit}>
						Додати
					</Button>
				</FormControl>
			</BoxForm>
			<TrainingList
				books={books}
				startDate={startDate}
				endDate={endDate}
				booksDelete={hanleDelete}
			/>
		</Wrapper>
	);
}
