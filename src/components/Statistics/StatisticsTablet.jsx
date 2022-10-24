import {
	StatisticsTabletText,
	StatisticsContainerTablet,
	StatTable,
	StatTableDate,
	StatTableTime,
	StatTableTextPage,
} from 'ui/StatisticsPage';

const StatisticsTablet = () => {
	return (
		<StatisticsContainerTablet>
			<StatisticsTabletText>Статистика</StatisticsTabletText>
			<StatTable>
				<tbody>
				<tr>
					<StatTableDate>10.10.2019</StatTableDate>
					<StatTableTime>08:10:23</StatTableTime>
					<StatTableDate>
						30 <StatTableTextPage>стор.</StatTableTextPage>
					</StatTableDate>
				</tr>
				<tr>
					<td>12.10.2019</td>
					<td>08:10:23</td>
					<td>30стр</td>
				</tr>
				<tr>
					<td>12.10.2019</td>
					<td>08:10:23</td>
					<td>30 стр</td>
					</tr>
					</tbody>
			</StatTable>
		</StatisticsContainerTablet>
	);
};

export default StatisticsTablet;
