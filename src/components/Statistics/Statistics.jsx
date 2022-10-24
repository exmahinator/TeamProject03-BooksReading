import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
	StatisticsButton,
	StatPagesContainer,
	StatSubContainerTable,
	StatTextResolt,
} from 'ui/StatisticsPage';
import { useDispatch } from 'react-redux';
import { addFinishedPages } from '../../redux/library/libraryOperation';

import StatisticsTablet from './StatisticsTablet';
import { useState } from 'react';
// import { DatePicker } from '@mui/x-date-pickers';

const Statistics = () => {
	const dispatch = useDispatch();
	const [pages, setPages] = useState('');

	const handleChangePage = evt => {
		setPages(Number(evt.target.value));
	};

	const handleAddResults = pages => {
		dispatch(addFinishedPages(pages));
		setPages('');
	};

	return (
		<StatPagesContainer>
			<StatTextResolt>Результаты</StatTextResolt>
			<StatSubContainerTable>
				<StatCommonContainer>
					<StatSubContainer>
						<StatLabel htmlFor="data">Дата</StatLabel>
						<StatInput id="data" type="date" defaultValue="2022-10-25" />
					</StatSubContainer>
					<StatSubContainer>
						<StatLabel htmlFor="pages">Кількість сторінок </StatLabel>
						<StatInput
							id="pages"
							type="text"
							onChange={handleChangePage}
							value={pages}
						/>
					</StatSubContainer>
				</StatCommonContainer>
				<StatisticsButton
					type="button"
					onClick={() => handleAddResults({ pages })}
				>
					Додати результат
				</StatisticsButton>
			</StatSubContainerTable>
			<StatisticsTablet />
		</StatPagesContainer>
	);
};

export default Statistics;
