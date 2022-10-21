
import TimerBlock from 'components/TimerBlock/TimerBlock';
import { useDispatch } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import { addFinishedPages } from '../redux/library/libraryOperation';

export const StatisticsPage = () => {
	const dispatch = useDispatch();

	const pages = {
		pages: 1,
	};

	const handleAddResults = () => {
		dispatch(addFinishedPages(pages));
	};

	return (
		<Section>
			<Container>
				<TimerBlock/>
				<div>Statistic</div>
				<button type="button" onClick={handleAddResults}>
					Додати результат
				</button>
			</Container>
		</Section>
	);
};
