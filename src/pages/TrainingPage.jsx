import MyTraining from 'components/MyTraining/MyTraining';
import LineChart from '../components/Chart/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import GoalTrainingBox from '../ui/TrainingPage/GoalTrainingBox.styled';
import { addBookPlanning } from '../redux/library/libraryOperation';
import MyGoals from '../components/MyGoals/MyGoals';
// import TrainingList from '../components/TrainingList/TrainingList';
import { Navigate, NavLink } from 'react-router-dom';
import { getCurrentlyReading } from '../redux/library/librarySelector';
import { useEffect } from 'react';

export const TrainingPage = () => {
	const dispatch = useDispatch();
	const gcurrentlyReading = useSelector(getCurrentlyReading);
	let trainingNow = false;

	// прпописати тогл відображення сторінки тренінг або статистика
	// якщо в CurrentlyReading щось є, то перенаправляємо на статистику!

	// useEffect(() => {
	// 	dispatch(getBookPlanning());
	// }, [dispatch]);

	return (
		<Section>
			<Container>
				<GoalTrainingBox>
				<MyGoals />
				<NavLink to="/statistics">Statistics</NavLink>
				<MyTraining />
				</GoalTrainingBox>
				
				{/* <TrainingList /> */}
				<LineChart />
			</Container>
		</Section>
	);
};
