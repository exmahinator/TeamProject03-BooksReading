import TimerBlock from 'components/TimerBlock/TimerBlock';
import Statistics from 'components/Statistics/Statistics';
import LineChart from 'components/Chart/Chart';
import { Section, Container } from 'ui/BasicStyles';
import {
	StatisticsContainerCommon,
	StatPagesContainer,
} from 'ui/StatisticsPage';
import { useSelector } from 'react-redux';
import { getCurrentlyReading, getFinishedReading } from "../redux/library/librarySelector";
import TrainingList from 'components/TrainingList';

export const StatisticsPage = () => {
	const currentlyReading = useSelector(getCurrentlyReading);
	const finishedReading = useSelector(getFinishedReading);

	

	return (
		<Section>
			<Container>
				<StatisticsContainerCommon>
					<TimerBlock />
					<TrainingList
				books={[...currentlyReading, ...finishedReading]}
				// startDate={startDate}
				// endDate={endDate}
				// booksDelete={hanleDelete}
			/>
					<LineChart/>
					<StatPagesContainer>
						<Statistics />
					</StatPagesContainer>
				</StatisticsContainerCommon>
			</Container>
		</Section>
	);
};
