import { useSelector } from 'react-redux';
import {
	StatisticsTabletText,
	StatisticsContainerTablet,
	StatTable,
	StatTableDate,
	StatTableTime,
	StatTableTextPage,
} from 'ui/StatisticsPage';
import { getStats } from '../../redux/library/librarySelector';
import { nanoid } from 'nanoid'

const StatisticsTablet = () => {
	const stats = useSelector(getStats);

	const dateAndTime = stats.map(({ time, pagesCount }) => {
		const splitDateAndTime = time.split(' ');

		return {
			date: new Date(splitDateAndTime[0]),
			time: splitDateAndTime[1],
			page: pagesCount,
		};
	});

	return (
		<StatisticsContainerTablet>
			<StatisticsTabletText>Статистика</StatisticsTabletText>
			<StatTable>
				<tbody>
					{dateAndTime.map(({ date, time, page }) => (
						<tr key={nanoid()}>
							<StatTableDate>{date.toLocaleDateString()}</StatTableDate>
							<StatTableTime>{time}</StatTableTime>
							<StatTableDate>
								{page} <StatTableTextPage>стор.</StatTableTextPage>
							</StatTableDate>
						</tr>
					))}
				</tbody>
			</StatTable>
		</StatisticsContainerTablet>
	);
};

export default StatisticsTablet;
