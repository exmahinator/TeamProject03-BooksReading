import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useState } from "react";
import {
	ProgressItem,
	ProgressNumber,
	ProgressNumberLast,
	ProgressText,
	ProgressList,
	ProgressTitle,
	ProgressSubContainer,
	ProgressContainer,
} from 'ui/TrainingPage';
import { getCurrentlyReading, getFinishedReading, getStartDate, getEndDate } from "../../redux/library/librarySelector";

const MyGoals = () => {
	const location = useLocation();

	const currentlyReading = useSelector(getCurrentlyReading);
	const finishedReading = useSelector(getFinishedReading);
	const startDate = useSelector(getStartDate);
	const endDate = useSelector(getEndDate);

	const numberOfDays = Math.floor((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24))

	


	return (
		<ProgressContainer>
			<ProgressSubContainer>
				<ProgressTitle>Моя мета прочитати</ProgressTitle>
			</ProgressSubContainer>
			<ProgressSubContainer>
				<ProgressList>
					<ProgressItem>
						<ProgressNumber>{ currentlyReading.length + finishedReading.length}</ProgressNumber>
						<ProgressText>Кількість книжок</ProgressText>
					</ProgressItem>
					<ProgressItem>
						<ProgressNumber>{numberOfDays}</ProgressNumber>
						<ProgressText>Кількість днів</ProgressText>
					</ProgressItem>
					{location.pathname === '/statistics' && (
						<ProgressItem>
							<ProgressNumber><ProgressNumberLast>{currentlyReading.length }</ProgressNumberLast></ProgressNumber>
							<ProgressText>Залишилось книжок</ProgressText>
						</ProgressItem>
					)}
				</ProgressList>
			</ProgressSubContainer>
		</ProgressContainer>
	);
};

export default MyGoals;
