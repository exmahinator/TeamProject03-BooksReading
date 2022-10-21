import MyTraining from "components/MyTraining/MyTraining";
import LineChart from '../components/Chart/Chart';

import { useDispatch } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import {
	addBookPlanning,
	getBookPlanning,
} from '../redux/library/libraryOperation';
import MyGoals from '../components/MyGoals/MyGoals';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const TrainingPage = () => {
	const dispatch = useDispatch();

	const data = {
		startDate: '2022-10-20',
		endDate: '2022-10-25',
		books: ['635158813551fd60da50fefb'],
	};

	useEffect(() => {
		dispatch(getBookPlanning());
	}, [dispatch]);

	const handleAddToPlanning = () => {
		dispatch(addBookPlanning(data));
	};

	return (
		<Section>
			<Container>
				<MyGoals />
				<button type="button" onClick={handleAddToPlanning}>
					Додати
				</button>
				<NavLink to="/statistics">Statistics</NavLink>
         <MyTraining/>
				<LineChart />
			</Container>
		</Section>
	);
};
>>>>>>> dev
