import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
	StatisticsButton,
	StatPagesContainer,
	StatSubContainerTable,
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
			<StatSubContainerTable>
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
			</StatSubContainerTable>
			<StatisticsTablet />
		</StatPagesContainer>
	);
};

export default Statistics;
