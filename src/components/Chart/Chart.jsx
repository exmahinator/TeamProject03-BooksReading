import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getStats } from '../../redux/library/librarySelector';
import { useSelector } from 'react-redux';

// import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ 0',
		},
	},
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function LineChart() {
	// const stats = useSelector(getStats);
    // console.log(stats[0].pagesCount);
    
    const data = {
	datasets: [
		{
			label: 'Кількість сторінок',
			// data: stats.map((stat) => stat.pagesCount),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'День',
			// data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}

	return <Line options={options} data={data} />;
}
