const StatisticsInput = () => {
	return (
		<div>
			<div>
				<label htmlFor="data">Дата</label>
				<input id="data" type="text" />
			</div>
			<div>
				<label htmlFor="pages">Кількість сторінок </label>
				<input id="pages" type="text" />
			</div>
		</div>
	);
};

export default StatisticsInput;
