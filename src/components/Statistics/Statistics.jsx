import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
	StatisticsButton,
	StatPagesContainer,
	StatSubContainerTable,
} from 'ui/StatisticsPage';
import { useDispatch } from 'react-redux';
import { addFinishedPages } from '../../redux/library/libraryOperation';

import StatisticsTablet from './StatisticsTablet';
import { useState } from 'react';
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
			<StatSubContainerTable>
				<StatCommonContainer>
					<StatSubContainer>
						<StatLabel htmlFor="data">Дата</StatLabel>
						<StatInput id="data" type="text" />
					</StatSubContainer>
					<StatSubContainer>
						<StatLabel htmlFor="pages">Кількість сторінок </StatLabel>
						<StatInput id="pages" type="text" onChange={handleChangePage} value={pages} />
					</StatSubContainer>
				</StatCommonContainer>
				<StatisticsButton
					type="button"
					onClick={()=>handleAddResults({pages})}
				>
					Додати результат
				</StatisticsButton>
			</StatSubContainerTable>
			<StatisticsTablet />
		</StatPagesContainer>
	);
};

export default Statistics;
