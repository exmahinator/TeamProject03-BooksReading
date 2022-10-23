import TimerBlock from 'components/TimerBlock/TimerBlock';
// import StatisticsTablet from 'components/Statistics/StatisticsTablet';
import Statistics from 'components/Statistics/Statistics';
// import { useDispatch } from 'react-redux';
import { Section, Container } from 'ui/BasicStyles';
// import { addFinishedPages } from '../redux/library/libraryOperation';
import {
	StatisticsContainerCommon,
	StatPagesContainer,
} from 'ui/StatisticsPage';
export const StatisticsPage = () => {
	// const dispatch = useDispatch();

	// const pages = {
	// 	pages: 1,
	// };

	// const handleAddResults = () => {
	// 	dispatch(addFinishedPages(pages));
	// };

	return (
		<Section>
			<Container>
				<StatisticsContainerCommon>
					<div>Statistic</div>
					<TimerBlock />
					<StatPagesContainer>
						<Statistics />
						{/* <StatisticsButton type="button" onClick={handleAddResults}>
							Додати результат
						</StatisticsButton> */}
						{/* <StatisticsTablet /> */}
					</StatPagesContainer>
				</StatisticsContainerCommon>
			</Container>
		</Section>
	);
};
