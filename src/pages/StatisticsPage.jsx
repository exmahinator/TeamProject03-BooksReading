import TimerBlock from 'components/TimerBlock/TimerBlock';
import Statistics from 'components/Statistics/Statistics';
import { Section, Container } from 'ui/BasicStyles';
import {
	StatisticsContainerCommon,
	StatPagesContainer,
} from 'ui/StatisticsPage';

export const StatisticsPage = () => {
	return (
		<Section>
			<Container>
				<StatisticsContainerCommon>
					<div>Statistic</div>
					<TimerBlock />
					<StatPagesContainer>
						<Statistics />
					</StatPagesContainer>
				</StatisticsContainerCommon>
			</Container>
		</Section>
	);
};
