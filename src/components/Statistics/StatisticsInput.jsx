import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
} from 'ui/StatisticsPage';

const StatisticsInput = () => {
	return (
		<StatCommonContainer>
			<StatSubContainer>
				<StatLabel htmlFor="data">Дата</StatLabel>
				<StatInput id="data" type="text" />
			</StatSubContainer>
			<StatSubContainer>
				<StatLabel htmlFor="pages">Кількість сторінок </StatLabel>
				<StatInput id="pages" type="text" />
			</StatSubContainer>
		</StatCommonContainer>
	);
};

export default StatisticsInput;
