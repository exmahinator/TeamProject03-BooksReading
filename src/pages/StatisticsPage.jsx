import StatisticsTablet from 'components/Statistics/StatisticsTablet';
import StatisticsInput from 'components/Statistics/StatisticsInput';
import { useDispatch } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
import { addFinishedPages } from '../redux/library/libraryOperation';
import { StatisticsButton, StatisticsContainerCommon } from 'ui/StatisticsPage';
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
				<StatisticsContainerCommon>
					<div>Statistic</div>
					<StatisticsInput />
					<StatisticsButton type="button" onClick={handleAddResults}>
						Додати результат
					</StatisticsButton>
					<StatisticsTablet />
				</StatisticsContainerCommon>
			</Container>
		</Section>
	);
};
