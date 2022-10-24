import MyTraining from 'components/MyTraining/MyTraining';
import LineChart from '../components/Chart/Chart';
// import { useDispatch, useSelector } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import GoalTrainingBox from '../ui/TrainingPage/GoalTrainingBox.styled';
import MyGoals from '../components/MyGoals/MyGoals';
import { NavLink } from 'react-router-dom';
// import { getCurrentlyReading } from '../redux/library/librarySelector';


export const TrainingPage = () => {
	// const dispatch = useDispatch();
	// const gcurrentlyReading = useSelector(getCurrentlyReading);
	// let trainingNow = false;

	// прпописати тогл відображення сторінки тренінг або статистика
	// якщо в CurrentlyReading щось є, то перенаправляємо на статистику!

	return (
		<Section>
			<Container>
				<GoalTrainingBox>
				<MyGoals />
				<NavLink to="/statistics">Statistics</NavLink>
				<MyTraining />
				</GoalTrainingBox>
				<LineChart />
			</Container>
		</Section>
	);
};
