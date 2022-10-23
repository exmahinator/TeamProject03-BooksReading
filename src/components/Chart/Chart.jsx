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
import { red } from '@mui/material/colors';

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
			display: true,
			position: 'top',
		},
		title: {
			display: true,
			text: 'КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ 0',
		},   
	},
	scales: {
		xAxes: {
			ticks: {
			  display: false,
			},
			grid: {
                // display: false,
				lineWidth: 2,
				color: '#B1B5C2',
				borderColor: '#B1B5C2',
				borderWidth: 2,
            },
		},
		yAxes: {
			ticks: {
				display: false,
			},
			grid: {
				display: false
			},
		},
	}
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function LineChart() {
	// const stats = useSelector(getStats);
    // console.log(stats);
    const statsFact = [
		{ pagesCount: 5 },
		{ pagesCount: 15 },
		{ pagesCount: 25 },
		{ pagesCount: 35 },
		{ pagesCount: 12 },
		{ pagesCount: 13 },
	]
	const statsPlan = [
		{ pagesCount: 4 },
		{ pagesCount:8 },
		{ pagesCount: 12 },
		{ pagesCount: 8 },
		{ pagesCount: 22 },
		{ pagesCount: 54 },

	]

	// const calcDays = (date_1, date_2) => {
	// 	let difference = date_2.getTime() - date_1.getTime();
	// 	let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
	// 	const days = [];

	// 	for (let i = 0; i < TotalDays; i++) {
	// 		days.push(i);
	// 	}
	// 	return days;
	// }
	// const labels = calcDays(startDate, endDate);

	// let startDate = new Date('10/22/2022');
	// let endDate = new Date('10/25/2022');
	const days = [1, 2, 3, 4, 5, 6];


    const data = {
	labels: days,
	datasets: [
		{
			label: 'План', // вычислить за сколько дней прочесть книгу и количество страниц startData & endDatta
			data: statsPlan.map((stat) => stat.pagesCount),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			lineTension: 0.4,
		},
		{
			label: 'Факт', // stats (key) > [data.количество страницї]
			data: statsFact.map((stat) => stat.pagesCount),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
			lineTension: 0.4,
		},
	],
}

	return <Line options={options} data={data} />;
}
