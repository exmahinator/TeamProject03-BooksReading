import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
	StatisticsButton,
	StatPagesContainer,
} from 'ui/StatisticsPage';
// import { useDispatch } from 'react-redux';
// import { addFinishedPages } from '../redux/library/libraryOperation';

import StatisticsTablet from './StatisticsTablet';
const Statistics = () => {
	// const dispatch = useDispatch();

	// const pages = {
	// 	pages: 1,
	// };

	// const handleAddResults = pages => {
	// 	dispatch(addFinishedPages(pages));
	// };
	return (
		<StatPagesContainer>
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
			<StatisticsButton
				type="button"
				// onClick={handleAddResults(pages)}
			>
				Додати результат
			</StatisticsButton>
			<StatisticsTablet />
		</StatPagesContainer>
	);
};

export default Statistics;
