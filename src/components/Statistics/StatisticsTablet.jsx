import {
	StatisticsTabletText,
	StatisticsContainerTablet,
	StatTable,
} from 'ui/StatisticsPage';

const StatisticsTablet = () => {
	return (
		<StatisticsContainerTablet>
			<StatisticsTabletText>Статистика</StatisticsTabletText>
			<StatTable>
				<tr>
					<td>10.10.2019</td>
					<td>08:10:23</td>
					<td>30стр</td>
				</tr>
				<tr>
					<td>12.10.2019</td>
					<td>08:10:23</td>
					<td>30стр</td>
				</tr>
				<tr>
					<td>12.10.2019</td>
					<td>08:10:23</td>
					<td>30стр</td>
				</tr>
			</StatTable>
		</StatisticsContainerTablet>
	);
};

export default StatisticsTablet;
