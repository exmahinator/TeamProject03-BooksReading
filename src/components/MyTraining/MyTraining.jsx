import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Wrapper, Title, BoxForm, Button} from './MyTraining.styled';

export default function MyTraining() {

  const [personName, setPersonName] = useState([]);
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [result, setResult] = useState({});
  console.log('setResult:', setResult);

  const dispatch = useDispatch();

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

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(result({start, finish, personName}));
  setStart(null);
  setFinish(null);
  setPersonName([]);
  DatePicker.reset();
  Select.reset();

console.log("click")
}

  return (
    <Wrapper>
      <Title>My training</Title>
      <BoxForm>
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        label="Start"
        value={start}
        disablePast={true}
        onChange={(newValue) => {
            setStart(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
      />
    </LocalizationProvider>
   
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   
      <DatePicker
      label="Finish"
      value={finish}
      disablePast={true}
      onChange={(newValue) => {
        setFinish(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} helperText={params?.inputProps?.placeholder} />
      )}
    />
    
  </LocalizationProvider>

       <FormControl sx={{ width: 280 }} onSubmit={handleSubmit}>
      <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Choose books from the library</em>;
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

      <Button type="button" onClick={handleSubmit}>Add</Button>
      </FormControl>
    </BoxForm>
    </Wrapper>
  );
}

