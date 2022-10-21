import {
	StatisticsTabletText,
	StatisticsContainerTablet,
} from 'ui/StatisticsPage';

const StatisticsTablet = () => {
	return (
		<div>
			<StatisticsContainerTablet>
				<StatisticsTabletText>Статистика</StatisticsTabletText>
				<table>
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
				</table>
			</StatisticsContainerTablet>
		</div>
	);
};

export default StatisticsTablet;
