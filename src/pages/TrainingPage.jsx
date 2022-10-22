import MyTraining from 'components/MyTraining/MyTraining';
import LineChart from '../components/Chart/Chart';
import { useDispatch } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import { addBookPlanning } from '../redux/library/libraryOperation';
import MyGoals from '../components/MyGoals/MyGoals';
import TrainingList from '../components/TrainingList/TrainingList';
import { NavLink } from 'react-router-dom';

export const TrainingPage = () => {
	const dispatch = useDispatch();

	const data = {
		startDate: '2022-10-21',
		endDate: '2022-10-25',
		books: ['6351862f3551fd60da51009d'],
	};

	// useEffect(() => {
	// 	dispatch(getBookPlanning());
	// }, [dispatch]);

	const handleAddToPlanning = () => {
		dispatch(addBookPlanning(data));
		// в запрос на добавление книг в тренировку добавить книги с редакс стейта, иначе при новом запросе перезаписівается только одна книга!
	};

	return (
		<Section>
			<Container>
				<MyGoals />
				<button type="button" onClick={handleAddToPlanning}>
					Додати
				</button>
				<NavLink to="/statistics">Statistics</NavLink>
				<MyTraining />
				<TrainingList />
				<LineChart />
			</Container>
		</Section>
	);
};
