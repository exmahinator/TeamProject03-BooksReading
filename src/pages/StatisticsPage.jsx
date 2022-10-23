import TimerBlock from 'components/TimerBlock/TimerBlock';
import Statistics from 'components/Statistics/Statistics';
import { Section, Container } from 'ui/BasicStyles';
import { StatisticsContainerCommon } from 'ui/StatisticsPage';

export const StatisticsPage = () => {
	return (
		<Section>
			<Container>
				<StatisticsContainerCommon>
					<div>Statistic</div>
					<TimerBlock />
					<Statistics />
				</StatisticsContainerCommon>
			</Container>
		</Section>
	);
};
