import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {getIsLoggedIn} from '../../redux/selectors';
import { addBookPlanning } from '../../redux/library/libraryOperation';
import { getGoingToRead } from "../../redux/library/librarySelector";
import { Wrapper, Title, BoxForm, Button } from './MyTraining.styled';

// "startDate": "2022-10-20",
	//   "endDate": "2022-10-25",
	//   "books": [
	//     "635150dd3551fd60da50fed6", "507f1f77bcf86cd799439013"
	//   ]


export default function MyTraining() {
	const dispatch = useDispatch();
	const [personName, setPersonName] = useState([]);
	const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [books, setBooks] = useState(null);

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

	// const names = [
	// 	'Oliver Hansen',
	// 	'Van Henry',
	// 	'April Tucker',
	// 	'Ralph Hubbard',
	// 	'Omar Alexander',
	// 	'Carlos Abbott',
	// 	'Miriam Wagner',
	// 	'Bradley Wilkerson',
	// 	'Virginia Andrews',
	// 	'Kelly Snyder',
  // ];
  
  const goingToRead = useSelector(getGoingToRead);

	// Дата старту - готова до використання---
	const receiveDataFromStart = newValue => {
    const startDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D + 1}`;
    setStartDate(startDate);
		// console.log('startDate', startDate);
  };
  
  const receiveDataFromEnd = newValue => {
    const endDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D + 1}`;
    setEndDate(endDate);
  }
	// ----------------------------------------
  // console.log('startDate', startDate);
  // console.log('endDate', endDate);
  // ----------------------------------------

  const handleChange = event => {
    console.log(event)
		const {
      target: { value },
		} = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);

  };
    //  console.log("personName", personName)

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(addBookPlanning({ startDate, endDate, personName }));
		setStart(null);
		setFinish(null);
		setPersonName([]);

		console.log(handleSubmit);
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
						multiple
						displayEmpty
						value={personName}
						onChange={handleChange}
						input={<OutlinedInput />}
						renderValue={selected => {
							if (selected.length === 0) {
								return <em>Обрати книги з бібліотеки</em>;
							}

							return selected.join(', ');
						}}
						MenuProps={MenuProps}
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem disabled value="">
							<em>Placeholder</em>
						</MenuItem>
						{goingToRead?.map(({_id, title, author}) => (
							<MenuItem key={_id} value={title} name={_id}>
								{title} ({author})
							</MenuItem>
						))}
					</Select>

					<Button type="button" onClick={handleSubmit}>
						Додати
					</Button>
				</FormControl>
			</BoxForm>
		</Wrapper>
	);
}