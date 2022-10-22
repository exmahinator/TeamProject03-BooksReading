import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState} from 'react';
import { useDispatch} from 'react-redux';
// import {getIsLoggedIn} from '../../redux/selectors';
import {addBookPlanning} from '../../redux/library/libraryOperation';
import {Wrapper, Title, BoxForm, Button} from './MyTraining.styled';

export default function MyTraining() {

  const [personName, setPersonName] = useState([]);
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);

  // const books = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

const [startDate, setStartDate ]= useState(null);

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

  const handleChange = (event) => {
    // console.log(event)
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
}


// const startTime = {startDate: `${start['$y']} - ${start['$M']+1} - ${start['$D']}`};
// const finishTime = {endDate: `${finish['$y']} - ${finish['$M']+1} - ${finish['$D']}`};
// const goingToBooks = books.id;

// console.log('startTime:', startTime)
// console.log('finishTime:', finishTime)
// "startDate": "2022-10-20",
//   "endDate": "2022-10-25",
//   "books": [
//     "635150dd3551fd60da50fed6", "507f1f77bcf86cd799439013"
//   ]


const getStartData = (newValue) => {
 setStart(newValue)
 console.log(newValue)
 setStartDate(Object.values(newValue))
 console.log(startDate)
} 

const getFinishData = (newValue) => {
  setFinish(newValue)
   console.log(newValue)
 } 
const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(addBookPlanning({start, finish, personName}));
  setStart(null);
  setFinish(null);
  setPersonName([]);

  console.log(handleSubmit)
}
// console.log(start)

// const someStart = Object.values(newValue);
// console.log(someStart);
// const resultData = {
//   data1: someStart[4],
//   data2: someStart[5] + 1,
//   data3: someStart[6],
// };
// console.log(resultData);
// }}


  return (
    <Wrapper>
      <Title>Моє тренування</Title>
      <BoxForm>
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        label="Початок"
        value={start}
        disablePast={true}
        onChange={(newValue) => {
          setStartDate(Object.values(newValue))
          // getStartData(newValue);
          // console.log()
        }}
        renderInput={(params) => (
          <TextField {...params} />
        )}
      />
    </LocalizationProvider>
   


    <LocalizationProvider dateAdapter={AdapterDayjs}>
   
      <DatePicker
      label="Завершення"
      value={finish}
      disablePast={true}
      onChange={(newValue) => {
        getFinishData(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params}/>
      )}
    />
    
  </LocalizationProvider>

       <FormControl sx={{ width: 280 }}>
      <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
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
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>

      <Button type="button" onClick={handleSubmit}>Додати</Button>
      </FormControl>
    </BoxForm>
    </Wrapper>
  );
}

