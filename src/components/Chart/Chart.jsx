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
import { getStartDate, getEndDate, getPagesPerDay, getStats } from '../../redux/library/librarySelector';
import { useSelector } from 'react-redux';
// import { red } from '@mui/material/colors';

// import faker from 'faker';
import { ChartWrapper, ChartBox, ChartTitle, ChartTime, ChartNumber} from 'ui/ChartStyled';

// window.onload=function(){
// let draw = ChartJS.controllers.line.prototype.draw;
// ChartJS.controllers.line = ChartJS.controllers.line.extend({
//     draw: function() {
//            let ctx = this.chart.chart.ctx;
//         ctx.save();
//         ctx.shadowColor = 'red';
//         ctx.shadowBlur = 10;
//         ctx.shadowOffsetX = 0;
//         ctx.shadowOffsetY = 4;
//         ctx.stroke();
//         draw.apply(this, arguments);
//         ctx.restore();
//     }
// });

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
	// title: {
	// 	display: true,
	// 	text: 'TEST',
	// 	fontSize: 24,
	// 	fontColor: 'red',
	// },

	plugins: {
		legend: {
			display: false,
			position: 'top',
			backgroundColor: 'white',
		},
		// title: {
		// 	display: true,
		// 	text: 'КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ 0',
		// 	position: 'top',
		// 	// defaultFontSize: 24,
		// 	// fontColor: '#666',
		// 	// fontFamily: 'Montserrat',
		// 	// fontStyle: normal,
		// 	// fontWeight: 500,
		// 	// defaultFontSize: 24,
		// 	// lineHeight: 15,
		// 	// textTransform: uppercase,
		// },
	},

	// stroke: {
	// 	shadowColor: 'black',
	// 	shadowBlur: 3,
	// 	shadowOffsetX: 3,
	// 	shadowOffsetY: 10,
	// },

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
				display: false,
			},
		},
	},
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function LineChart() {

	const stats = useSelector(getStats);
	const startDate = useSelector(getStartDate);
	const endDate = useSelector(getEndDate);
	const pagesPerDay = useSelector(getPagesPerDay);

	const calcDays = (startDate, endDate) => {
		const time = Date.parse(endDate) - Date.parse(startDate);
		let TotalDays = Math.ceil(time / (1000 * 3600 * 24));
		const days = [];

		for (let i = 0; i < TotalDays; i++) {
			days.push(i);
		}
		return days;
	};
	const days = calcDays(startDate, endDate);

	// const statsPlan = days.map(day => ({ pagesCount: pagesPerDay }));

	// const dateArr = stats.map(({time})=>{
	// 	const splitDate = time.split(' ');
	// 	const date = Date.parse(splitDate[0]);
	// 	return date
	// })

	// const statsFact = stats.filter(({pagesCount, time}) => {
	// 	const pages = 0;

	// 	const splitDate = time.split(' ');
	// 	const date = Date.parse(splitDate[0]);

	// 	const fact = {
	// 		pagesCount: pages,
	// 	}
	// 	return fact
	// });

	const statsFact = [
		{ pagesCount: 5 },
		{ pagesCount: 15 },
		{ pagesCount: 13 },
		// { pagesCount: 35 },
		// { pagesCount: 12 },
		// { pagesCount: 13 },
	];

	// let startDate = new Date('10/22/2022');
	// let endDate = new Date('10/25/2022');

	// const ShadowLineElement = Line.elements.Line.extend({
	// 	draw() {
	// 		console.log(this);

	// 		const { ctx } = this._chart;

	// 		const originalStroke = ctx.stroke;

	// 		ctx.stroke = function () {
	// 			ctx.save();
	// 			ctx.shadowColor = 'gray';
	// 			ctx.shadowBlur = 10;
	// 			ctx.shadowOffsetX = 0;
	// 			ctx.shadowOffsetY = 4;
	// 			originalStroke.apply(this, arguments);
	// 			ctx.restore();
	// 		};

	// 		Line.elements.Line.prototype.draw.apply(this, arguments);

	// 		ctx.stroke = originalStroke;
	// 	},
	// });

	// Line.defaults.ShadowLine = Line.defaults.Line;
	// Line.controllers.ShadowLine = Line.controllers.Line.extend({
	// 	datasetElementType: ShadowLineElement,
	// });

	const generateDateArr = function(start, end) {
		const startDate = new Date(start);
		const endDate = new Date(end);
		const arr = [];
		const dt = new Date(startDate);

		while (dt <= endDate) {
			const fullDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
			arr.push({time: fullDate});
			dt.setDate(dt.getDate() + 1);
		}
		return arr;
	}

	const datesArr = generateDateArr(startDate, endDate);
	
	const statsPlan = datesArr.map(stat => {
		const newStat = {...stat};
		newStat.pagesCount = pagesPerDay;
		return newStat;
	});

	const factPlan = datesArr.map(day => {
		const { time } = day;
		const newStat = { ...day, pagesCount: 0 };

		stats.forEach(el => {
			const factDate = new Date(el.time);
			const factFullDate = `${factDate.getFullYear()}-${factDate.getMonth() + 1}-${factDate.getDate()}`;

			if(factFullDate === time) {
				newStat.pagesCount += el.pagesCount;
			}
		});

		return newStat;
	})

	const data = {
		labels: datesArr.map(el => el.time),
		datasets: [
			{
				label: 'План', // вычислить за сколько дней прочесть книгу и количество страниц startData & endDatta
				data: statsPlan.map(stat => stat.pagesCount),
				pointBorderWidth: 6,
				// border: '2px solid #091E3F',
				// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
				// backgroundShadowColor: 'red',
				// shadowColor: 'black',
				// shadowBlur: 3,
				// shadowOffsetX: 3,
				// shadowOffsetY: 10,
				// xValue: ctx => value(ctx, 0, 2, 'x'),
				// yValue: ctx => value(ctx, 0, 2, 'y'),
				borderColor: '#091E3F',
				backgroundColor: '#091E3F',
				lineTension: 0.4,
			},
			{
				label: 'Факт', // stats (key) > [data.количество страницї]
				data: factPlan.map(stat => stat.pagesCount),
				borderColor: '#FF6B08',
				backgroundColor: '#FF6B08',
				// boxShadow: '0px 2px 3px rgba(9, 30, 63, 0.25)',
				lineTension: 0.4,
				pointBorderWidth: 6,
			},
		],
	};

	return (
		<ChartBox>
			<ChartTitle>Кількість сторінок / день <ChartNumber>34</ChartNumber> </ChartTitle>
			<ChartWrapper options={options} data={data} />
			<ChartTime>Час </ChartTime>
		</ChartBox>
	);
}
